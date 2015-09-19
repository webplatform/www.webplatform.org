SHELL := bash
PATH := bin:${PATH}
DATE := `date '+%Y%m%d'`
THIS_DIR:=$(shell pwd)


deps: node_modules/ src/files/assets/bower_components/
		mkdir -p ~/tmp
		bundle install


node_modules:
		npm install


src/files/assets/bower_components:
		bower install


compass:
		compass watch --debug-info --trace


local:
		node_modules/.bin/docpad-server --silent --offline


build: node_modules/ src/files/assets/bower_components/
		compass compile -e production --force
		node_modules/.bin/docpad-compile --env=production


static:
		cd out/ && python -m SimpleHTTPServer 9778


package:
		-mkdir -p archives/
		rm -rf out/frontend-styleguide
		tar cfz archives/static-${DATE}.tar.gz out/


lint:
		node_modules/gulp/bin/gulp.js lint


.PHONY: build