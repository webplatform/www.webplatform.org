SHELL := bash
PATH := bin:${PATH}
DATE := `date '+%Y%m%d'`
THIS_DIR:=$(shell pwd)


src/files/talk/chatlogs/webplatform.json:
		curl https://gist.githubusercontent.com/WebPlatformDocs/29c7b734d8212b2f1a33887b4be68ddc/raw/6ac3c5c39155623dfb3ed112ad7ba7b0d12cde06/webplatform.json -o src/files/talk/chatlogs/webplatform.json


src/files/talk/chatlogs/webplatform.txt:
		curl https://gist.githubusercontent.com/WebPlatformDocs/29c7b734d8212b2f1a33887b4be68ddc/raw/6ac3c5c39155623dfb3ed112ad7ba7b0d12cde06/webplatform.log -o src/files/talk/chatlogs/webplatform.txt


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
