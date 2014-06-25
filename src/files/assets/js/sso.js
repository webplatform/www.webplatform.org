(function ssoInit(w) {

  /**
   * Articles to enhance support:
   * - Better IE support:
   *   - note: IE11 on Windows 8.1 works
   *   - url: http://www.informit.com/articles/article.aspx?p=667416&seqNum=2
   * - Better Async with Promise:
   *   - note: We need only one call so far, maybe overkill
   *   - url: http://krasimirtsonev.com/blog/article/Cross-browser-handling-of-Ajax-requests-in-absurdjs
   */

  var redirectTo = encodeURIComponent(window.location.protocol) + "%2F%2F" + window.location.hostname + encodeURIComponent(window.location.pathname||""),
      searchQuery = (!!window.location.search)?encodeURIComponent(window.location.search||""):"",
      serviceEndpoint = "https://accounts.webplatform.org/channel",
      recoverEndpoint = serviceEndpoint + "?service=recover&redirectTo=" + redirectTo + searchQuery,
      destroyEndpoint = serviceEndpoint + "?service=destroy",
      callbackUri = "/test/Special:AccountsHandler/callback",
      received = null,
      checkedOnce = false,
      recoveryPayload = "recoveryPayload=",
      logEvent = function(e){ console.debug(e) },
      checkedRecentlyCookieName = "wpdSsoUsername",
      postSuccessStatusValue = 201,
      postLogoffStatusValue = 401,
      acceptableActions = {recover: recoverEndpoint, destroy: destroyEndpoint};
      //wpdSsoUsername = document.cookie.replace(/(?:(?:^|.*;\s*)wpdSsoUsername\s*\=\s*([^;]*).*$)|^.*$/, "$1") || null;

  function iframeLoadedHandler() {
    setTimeout(sso.doCheck.bind(sso), 400); // Scope hoisting
    logEvent("iframeLoadedHandler, About to launch the SSO check");
  }

  function postBackendHandler() {
    // this, in this function, represents an XHR object
    if (this.readyState === 4) {
      if (this.status === postSuccessStatusValue) {
        forceReload(this, "You are signed on, we are about to reload this page");
      }
      if (this.status === postLogoffStatusValue) {
        forceReload(this, "You are signed off, we are about to reload this page");
      }
    }
  }

  function forceReload(xhrObj, message) {
    // this, in this function, represent sso
    try {
      mw.notify(message);
    } catch(e) {}
    logEvent("forceReload; service said status is " + xhrObj.status + " we have to reload!", xhrObj);
    window.location.reload(true);
  }

  function createTunnel(action) {
    var authChecker = null,
        myEndpoint  = (acceptableActions.hasOwnProperty(action)||false === true)?acceptableActions[action]:null;

    logEvent('createTunnel, might create iframe to ', myEndpoint );

    if (myEndpoint !== null) {
      authChecker = document.createElement('iframe');
      authChecker.src = myEndpoint;
      authChecker.width = 0;
      authChecker.height = 0;
      authChecker.id = "authChecker";
      authChecker.onload = iframeLoadedHandler;

      try {
        document.body.appendChild(authChecker);
        document.getElementById("authChecker").style.display = "none";
      } catch(e) {
        logEvent("createTunnel, caught exception will return null", e);
        return null;
      }
    }

    return authChecker;
  }

  function messageHandler(input) {
    logEvent("messageHandler, input:", arguments);
    if ( !! input.data ) {
      received = input.data;
      recoveryPayload += received.recoveryPayload;
      hasSession = received.hasSession || false;
      logEvent("messageHandler, to processReceived call [hasSession,recoveryPayload,received]:", hasSession, recoveryPayload, received);
      processReceived(hasSession);
    } else {
      logEvent("messageHandler; no data received from accounts server");
    }
  }

  function processReceived(hasSessionBool) {
    if ( hasSessionBool === false ) {
      logEvent("processReceived; No Session, nothing to do");
      return;
    }

    logEvent("processReceived; Should send post to " + callbackUri, received, sso.state);
    postBackend();
  }

  // Maybe improve as described https://gist.github.com/shimondoodkin/4706967

  function postBackend() {
    var xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
      xhr.open("POST", callbackUri, true);
      //xhr.setRequestHeader("Content-length", recoveryPayload.length);
      //xhr.setRequestHeader("Connection", "close");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = postBackendHandler.bind(xhr);
      xhr.send(recoveryPayload);
    }
  }

  var SsoHandlerClass = function SsoHandlerClass ( ) {
      this.state = {
          username: null,
          isAnonymous: true,
          hasSession: false
      };
  };

  SsoHandlerClass.prototype.doCheck = function doCheck ( ) {
    logEvent("doCheck; [callbackUri,isAnonymous,username]: ", callbackUri, this.state.isAnonymous, this.state.username);

    if (self.tunnel === null) {
      logEvent("doCheck; no tunnel, we stop here.");
      return;
    }

    logEvent("doCheck; pinging the accounts server");
    try {
      self.tunnel.contentWindow.postMessage("ping:" + this.state.username, recoverEndpoint);
    } catch(e) {}
  };

  SsoHandlerClass.prototype.init = function init (setCallbackUri, logging) {
    var action   = 'recover';
    console.log("init; this is ", this);

    if ( !! w.ssoPostSuccessStatusValue ) {
      postSuccessStatusValue = w.ssoPostSuccessStatusValue;
    }
    if ( !! w.ssoPostLogoffStatusValue ) {
      postLogoffStatusValue = w.ssoPostLogoffStatusValue;
    }

    if ( logging === false ) {
      logEvent = function(){}; // Doing nothing with it.
    }

    if ( !! setCallbackUri && typeof setCallbackUri === "string" ) {
      callbackUri = setCallbackUri;
    }

    this.state.username = w.mw.user.getName();
    this.state.isAnonymous = (this.state.username === null)?true:false;

    logEvent("init called [isAnonymous,callbackUri]: ", this.state, callbackUri);

    self.tunnel = createTunnel(action); // Defaults to NULL anyway

    logEvent("init, end state is", this.state);
  };

  w.sso = new SsoHandlerClass();

  w.addEventListener("message", messageHandler, false);

  setTimeout(sso.init.bind(w.sso), 800);
})(window);