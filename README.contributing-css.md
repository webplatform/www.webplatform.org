# (S)CSS Workspace

This is where we make changes to most CSS files.

To contribute, you have to follow the Requirements shown below. If you do not have time or setup to contribute, you can make an issue and make your change proposal [in our issue tracker](https://github.com/webplatform/www.webplatform.org/issues/new?labels=css-change-proposal&title=%5Bsuggestion%5D).

## Things to know

* CSS files in `/assets/css/*.css` are generated using SASS/Compass and maintained in `sass/*.scss`.
* Each file that starts by an underscore (`_`) is considered as a partial, and are to be included in one or many other SASS files.
* If you do not mind using Ruby, we are providing `.rbenv`, `Gemfile`, `.ruby-version` at the root of the project so you can have a sandbox with this project requirements
* You shoul be able to work without use of Ruby directly, a list of available SASS/Compass compilers is provided in the References below
* Project currently doesn’t use too many extensions. The exact versions are described in the following project root files: `Gemfile`, `config/compass.rb`, `bower.json`.
* If your setup has problem getting the required SASS/Compass modules/plugins/extensions, see Problems with extensions below.
* All external libraries MUST be called through appropriate dependency manager in `Gemfile`, `config/compass.rb`, `bower.json`, and/or `package.json`


## Using workspace

### With the terminal

#### Without direct use of Compass

If you do not have Compass installed or prefer not to install it, here is how you can do it using SASS directly.

* Follow instructions given in *SASS/Compass extension archive* (below)
* Get a snapshot of the generated files, see *Use generated site snapshot* (below)
* Have a SASS compiler installed
* Run from the terminal

    ```
    sass --scss \
          --debug-info --watch sass:out/assets/css \
          --compass --trace \
          -I ./extensions/blueprint/stylesheets \
          -I ./extensions/compass/stylesheets \
          -I ./extensions/compass-flexbox/stylesheets
    ```


### Installing dependencies

#### Ubuntu

    sudo apt-get install -y bundler npm nodejs nodejs-legacy
    npm install
    bundle install

## To contribute

### Requirements

Wanna help us with CSS? Great!

Here are an rough overview on how we work.

* Fork, create a branch, commit as much as you want
* See if you are changing file `file.scss` matching one in `src/documents/assets/css/file.css` (you can create if there is none)
* Compile the SASS files, check for errors
* All external libraries MUST be called through appropriate dependency manager.
* Make sure you include the appropriate version dependencies in `Gemfile`, `config/compass.rb`, `bower.json` as part of your pull request
* Test your version locally (see README.md at the root of project)
* Rebase your changes from our master branch
* Squash commits into one, send a pull request


## To improve

### Use of SASS within Chrome developer tools

At this time, its impossible to use Chrome developer tools to edit our SASS files.

We want to have an easy to use workspacet to motivate contributions and this feature will be enabled as soon as we see interest in it.

The reason is that we are currently using a version of SASS that doesn’t support a required feature called "sourcemaps".

If you want us to speed things up, just [make +1 on this issue](https://github.com/webplatform/www.webplatform.org/issues/7)

* http://thesassway.com/beginner/getting-started-with-sass-and-compass
* https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0
* https://developer.chrome.com/devtools/docs/css-preprocessors


## Help

### Problems with extensions

If for any reason you cannot use a full version of Compass/SASS with extensions, or are having problems to get them installed in your workspace.

There is a way to override and have them installed only for this workspace.

To do so, download the *SASS/Compass extensions archive* in this workspace `extensions/` folder.


## References

### Use generated site snapshot

If you only want to work on the CSS you do not need to install NodeJS and Docpad. They are useful only if you want to work on the content and the HTML we need generating.

For this, you can have the SASS compiler overwrite the `sass/*.scss` files on top of the extracted site archive files (in `out/assets/css/`) and have a minimal web server show you the result.

#TODO, see [this issue](https://github.com/webplatform/www.webplatform.org/issues/8)


### SASS/Compass extension archive

You do not need to install Compass to contribute. An alternate way is to download an archive, and extract the content in the project root `extensions/` folder.

We are mantaining the external SASS/Compass dependencies in this archive.

* [Current SASS extensions dependencies archive](http://source.webplatform.org/wpd/internal/www-workspace-sass-extensions-20140619.zip)

### CSS Pre compilers

More help on how to use this workspace without terminal is coming soon.

* [SASS](http://sass-lang.org/)
* [Compass](http://compass-style.org/)

