# [WebPlatform](http://www.webplatform.org/) static pages

Public site at [www.webplatform.org](http://www.webplatform.org/) has some pages that aren't managed by a content management system, they are built using a static site generator.

Although this workspace is for the static content of the site, it can also be used to work on HTML and CSS markup and patterns for various projects inside WebPlatform Docs.


## Installation

*NOTE*: Directives assumes you are using a Unix like Operating System, but [DocPad should work many Operating Systems, including Microsoft Windows](http://bevry.me/learn/node-install).

1. Install NodeJS and NPM

    You can download node from [nodejs.org](http://nodejs.org/).

    As for NPM, it depends of the Operating system you are using.

2. As an administrator, install the following packages as global on your workstation

        npm install -g docpad@6.64 grunt-cli bower

3. Checkout the code and run `npm install`

        mkdir -p ~/workspace/webplatform/static-site
        cd ~/workspace/webplatform/static-site
        git clone GITREPO .
        npm install

4. Code is managed from the `src/` folder, and is generated through `docpad run` utility.

        docpad run


To lean more about how to use, you can refer to [DocPad documentation](http://docpad.org/docs).


## Depdencies

For more details, see `package.json` and `bower.json`

* [DocPad](http://docpad.org/), static pages generation
* [DocPad plugin "eco"](https://github.com/docpad/docpad-plugin-eco), templating
** [eco source](https://github.com/sstephenson/eco)
* [DocPad plugin "frontend"](https://github.com/sergeche/docpad-plugin-frontend), managing assets
* [DocPad plugin "livereload"](https://github.com/docpad/docpad-plugin-livereload/), workspace live reload
* [DocPad plugin "marked"](https://github.com/docpad/docpad-plugin-marked), MarkDown support
** [Marked source](https://github.com/chjj/marked)
* [DocPad plugin "nodesass"](https://github.com/jking90/docpad-plugin-nodesass), NodeJS SASS support
** [node-sass](https://github.com/andrew/node-sass)
* [DocPad plugin "partials"](https://github.com/docpad/docpad-plugin-partials), view partials
