# [WebPlatform](http://www.webplatform.org/)

Public site at [www.webplatform.org](http://www.webplatform.org/) has some pages that aren't managed by a content management system, they are built using a static site generator called [DocPad](http://docpad.org/).

Although this workspace is for the static content of the site, it can also be used to work on HTML and CSS markup and patterns for various projects inside WebPlatform Docs.

To lean more about how to use, you can refer to [DocPad documentation](http://docpad.org/docs).

## Installation

*NOTE*: Directives assumes you are using a Unix like Operating System, but [DocPad should work many Operating Systems, including Microsoft Windows](http://bevry.me/learn/node-install).

1. Install NodeJS and NPM

    You can download node from [nodejs.org](http://nodejs.org/).

    As for NPM, it depends of the Operating system you are using. You can see the NPM installation instruction from the [nodejs](http://nodejs.org/) website.

2. As an administrator, install the following packages as global on your workstation

        npm install -g docpad@6.64 gulp bower

3. Checkout the code and run `npm install`

        mkdir -p ~/workspace/webplatform/www
        cd ~/workspace/webplatform/www
        git clone git@github.com:webplatform/www.webplatform.org.git .
        npm install

    This installs all dependencies to work on the project.

4. Code is managed from the `src/` folder, and is generated through `docpad run` utility and creates a static version in `out/`..

        npm start

    Also, you can run docpad directly with the watcher:

        docpad run

    You can also leverage work with CSS and JavaScript using built in tools:

    * JavaScript Linting

            gulp lint

    * Compiling SASS files

            ... in progress ...

    * Minifying before deploying

            gulp minify --env=production

    All of these commands can work while running the local development server `docpad run`. When ready to deply, see [#Deploying]


## Deploying

1. Prepare for deploying (will it work in production?)

        docpad generate --env=production
        gulp minify --env=production
        gulp package --env=production  // #TODO

    ... yes?

2. Make a pull request

    ... not finished yet.

    Current plan is that when a person who has rights to merge to master, a deployment system will pull from github, run the scripts in the previous step, sync the files with all web servers. Automatically.




## Depdencies

For more details, see `package.json` file.

* [Gulp](http://gulpjs.com/), JavaScript build system
* [DocPad](http://docpad.org/), static pages generation
* [DocPad plugin "eco"](https://github.com/docpad/docpad-plugin-eco), templating
  * [eco source](https://github.com/sstephenson/eco)
* [DocPad plugin "frontend"](https://github.com/sergeche/docpad-plugin-frontend), managing assets
* [DocPad plugin "livereload"](https://github.com/docpad/docpad-plugin-livereload/), workspace live reload
* [DocPad plugin "marked"](https://github.com/docpad/docpad-plugin-marked), MarkDown support
  * [Marked source](https://github.com/chjj/marked)
* [DocPad plugin "nodesass"](https://github.com/jking90/docpad-plugin-nodesass), NodeJS SASS support
  * [node-sass](https://github.com/andrew/node-sass)
* [DocPad plugin "partials"](https://github.com/docpad/docpad-plugin-partials), view partials
