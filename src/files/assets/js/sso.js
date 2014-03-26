(function ssoInit(w) {
  var accountsContentServer = 'https://accounts.webplatform.org/',
      callbackUri = '/wiki/Special:AccountsHandler/callback?sessionToken=',
      hasSession = null,
      received = null,
      checkedOnce = false,
      isAnonymous = false; // Lets not make checks for no reason, flip it to true if needed

  function iframeLoadedHandler() {
    console.log('Will set timeout because iframe is loaded');
  }

  function postBackendHandler() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        handleCreationSuccess.apply(this);
      }
    }
  }

  function handleCreationSuccess() {
    console.log('HandleCreation Success', this);
    window.location.reload(true);
  }

  function createTunnel() {
    var authChecker = document.createElement('iframe');
    authChecker.src = accountsContentServer;
    authChecker.frameworder = 0;
    authChecker.width = 0;
    authChecker.height = 0;
    authChecker.id = 'authChecker';
    authChecker.onload = iframeLoadedHandler;

    document.body.appendChild(authChecker);

    return authChecker;
  }

  function messageHandler(input) {
    if ( !! input.data && !! input.data.hasSession && checkedOnce === false) {
      received = input.data;
      callbackUri += input.data.sessionToken;
      hasSession = input.data.hasSession;
      processReceived();
    }
    checkedOnce = true;
  }

  w.addEventListener("message", messageHandler, false);

  function processReceived() {
    console.log('Should send post to ' + callbackUri);
    postBackend();
  }

  // Maybe improve as described https://gist.github.com/shimondoodkin/4706967

  function postBackend() {
    var xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = postBackendHandler.bind(xhr);
      xhr.open("GET", callbackUri, true);
      xhr.send();
    }
  }

  var SsoHandlerClass = function SsoHandlerClass() {};

  SsoHandlerClass.prototype.doCheck = function doCheck() {
    var self = this;

    if (!self.tunnel) {
      console.log('doCheck called, but we do not have tunnel ready to do check, do we already have a session?');
      return;
    }

    if (isAnonymous === false) {
      console.log('doCheck called, but we already have a session');
      return;
    }
    if (checkedOnce === false) {
      self.tunnel.contentWindow.postMessage('hi', accountsContentServer);
    }
  };

  SsoHandlerClass.prototype.init = function init(isAnonymousCheckClosure, setCallbackUri) {
    var self = this;

    if ( !! setCallbackUri && typeof setCallbackUri == 'string') {
      callbackUri = setCallbackUri;
    }

    isAnonymous = isAnonymousCheckClosure.apply(self);
    console.log('init called, switched property isAnonymous to: ', isAnonymous);

    if (isAnonymous === true) {
      this.tunnel = createTunnel();
    }
  };

  return w.sso = new SsoHandlerClass();

})(window);