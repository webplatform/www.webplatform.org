SHELL := bash
PATH  := bin:${PATH}
DATE  := `date '+%Y%m%d'`
PWD   := $(shell pwd)
.DEFAULT_GOAL := build

# https://www.gnu.org/software/make/manual/make.html


# It is a phony target because the build setp creates a folder called build, and we still always
# want the default target to rebuild or regenerate the files
.PHONY: build
build: src/files/talk/chatlogs/webplatform.json \
       src/files/talk/chatlogs/webplatform.txt \
       node_modules/
		npm run build


src/files/talk/chatlogs/webplatform.json:
		curl https://gist.githubusercontent.com/WebPlatformDocs/29c7b734d8212b2f1a33887b4be68ddc/raw/6ac3c5c39155623dfb3ed112ad7ba7b0d12cde06/webplatform.json -o src/files/talk/chatlogs/webplatform.json


src/files/talk/chatlogs/webplatform.txt:
		curl https://gist.githubusercontent.com/WebPlatformDocs/29c7b734d8212b2f1a33887b4be68ddc/raw/6ac3c5c39155623dfb3ed112ad7ba7b0d12cde06/webplatform.log -o src/files/talk/chatlogs/webplatform.txt


.PHONY: deps
deps: node_modules/ src/files/assets/bower_components/
		mkdir -p ~/tmp
		bundle install


node_modules/: package.json
		yarn install


src/files/assets/bower_components/: node_modules/
		node_modules/.bin/bower install


.PHONY: compass
compass:
		compass watch --debug-info --trace


.PHONY: serve
serve: build
		time node_modules/.bin/docpad-server --silent --offline


.PHONY: static
static: build
		cd build/ && python -m SimpleHTTPServer 4000


.PHONY: package
package: build
		-mkdir -p ../archives/
		-rm -rf build/frontend-styleguide
		find build/ -type d -name .git -exec rm -rf {} +
		find build/ -type f -name .git\* -exec rm {} +
		tar cfjv ../archives/www-${DATE}.tar.bz2 build/
		ln -s ../archives/www-${DATE}.tar.bz2 ../archives/www-latest.tar.bz2


.PHONY: lint
lint: node_modules/
		node_modules/gulp/bin/gulp.js lint


.PHONY: compass-container
compass-container:
	docker build --rm -t compass-container - < config/compass-container/Dockerfile


.PHONY: compass-container-run
compass-container-run:
	docker run -it --rm -v "${PWD}":/src -w /src compass-container
