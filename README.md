# [WebPlatform](http://www.webplatform.org/)

This is the homepage served at [www.webplatform.org](http://www.webplatform.org/).
We are serving them as non dynamic content due to the fact that we do not need to change the content frequently.

Although this workspace is for the static content of the site,
it can also be used to work locally on HTML and CSS markup and patterns for various projects inside WebPlatform Docs.

The pages are generated through a Node.js static site generator called [DocPad](http://docpad.org/) and
allows us to keep edition DRY by not copy-pasting code in many places while allowing us to have static documents to serve.
To learn more about DocPad, you can refer to their [DocPad documentation](http://docpad.org/docs).

## Installation

*NOTE*: Directives assumes you are using a Unix like Operating System, but [DocPad also works with Microsoft Windows](http://bevry.me/learn/node-install).

1. Install NodeJS and NPM

    You can download node from [nodejs.org](http://nodejs.org/).

    As for NPM, it depends of the Operating system you are using. You can see the NPM installation instruction
    from the [nodejs](http://nodejs.org/) website.

2. Fork the project, and checkout the code

        mkdir -p ~/workspace/webplatform/www
        cd ~/workspace/webplatform/www
        git clone git@github.com:renoirb/www.webplatform.org.git .
        make dev-deps

    This installs all dependencies to work on the project.

3. Create a branch and start your work.

        git checkout -b improving-flexbox-markup

4. Code is managed from the `src/` folder, and what gets changed in it gets regenerated automatically
    by what we call a "watcher", files are regenerated at every changes into `out/` folder.

        make dev-local

    You can also leverage work with CSS and JavaScript using built in tools:

    * JavaScript Linting

            make lint

    * Work on assets with live reload

            make dev-local

    * Work on SASS files, open up another tab (leave `make dev-local` run)

            make dev-compass

    NOTE: Working on CSS, have a look at [README.contributing-css.md](README.contributing-css.md).

    IMPORTANT: Compass is taking care to compile SASS files from `sass/`. It is configured to write to `src/documents/assets/css/`. You can configure Compass to watch files for you and copy them in the `src/` folder.  Technically DocPad should detect changes in `src/documents/` and refresh the equivalent files in `out/`. Which is not always the case. This will be fixed with issue [Fixing DocPad and Compass compilation conflicts](https://github.com/webplatform/www.webplatform.org/issues/9)

            make generate

    * Testing before pushing to the repository

            make static

    This gives you an equivalent of what gets deployed in production without watchers.

    * Everything works? Make a pull request from your branch :D

## Deploying

1. Prepare for deploying

        make deps
        make generate

    If you are on the salt master, this can be run from `/srv/code/www/repo`, then you can use Salt to deploy

        wpd-deploy app

    If you are happy and want to make a dated snapshot of it;

        make package


2. ... In progress...

    Current plan is that when a person who has rights to merge to master, a deployment system will pull from github, run the scripts in the previous step, sync the files with all web servers. Automatically.




## Related

### Depdencies

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

### Useful documentation

Besides reading the source, I found those pages useful.

* [DocPad TemplateData](http://docpad.org/docs/template-data)
* [DocPad Beginner Guide](http://docpad.org/docs/begin)
* [DocPad Meta Data](http://docpad.org/docs/meta-data)
* [Emmet site source (made using DocPad)](https://github.com/emmetio/emmet-docs)
* [DocPad site source (made using DocPad)](https://github.com/docpad/website)
