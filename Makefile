SHELL := bash
PATH := bin:${PATH}
DATE := `date '+%Y%m%d'`
THIS_DIR:=$(shell pwd)


build: node_modules/ src/files/assets/bower_components/ lint
		compass compile -e production --force
		time node_modules/.bin/docpad-compile --env=production


deps: node_modules/ src/files/assets/bower_components/
		mkdir -p ~/tmp
		bundle install


node_modules/: package.json
		npm install


src/files/assets/bower_components/: node_modules/
		node_modules/.bin/bower install


compass:
		compass watch --debug-info --trace


serve: build/
		time node_modules/.bin/docpad-server --silent --offline


static: build/
		cd build/ && python -m SimpleHTTPServer 4000


package: build/
		-mkdir -p ../archives/
		-rm -rf build/frontend-styleguide
		find build -type d -name .git -exec rm -rf {} +
		find build -type f -name .git\* -exec rm {} +
		tar cfjv ../archives/www-${DATE}.tar.bz2 build/
		ln -s ../archives/www-${DATE}.tar.bz2 ../archives/www-latest.tar.bz2


lint: node_modules/
		node_modules/gulp/bin/gulp.js lint


.PHONY: build
