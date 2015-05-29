SHELL := bash
PATH := bin:${PATH}
DATE := `date '+%Y%m%d'`

default: dev-local

deps:
		sudo npm -g install bower
		npm install
		bower install
		bundle install

dev-deps:
		npm install --dev
		bower install --dev
		bundle install

dev-compass:
		compass watch --debug-info --trace

dev-local:
		node_modules/docpad/bin/docpad server --silent --offline

generate:
		compass compile -e production --force
		node_modules/docpad/bin/docpad generate --env=production
		node_modules/gulp/bin/gulp.js minify --env=production

static: generate
		cd out/ && python -m SimpleHTTPServer 9778

package: generate
		-mkdir -p archives/
		rm -rf out/frontend-styleguide
		tar cfz archives/static-${DATE}.tar.gz out/

lint:
		node_modules/gulp/bin/gulp.js lint
