SHELL := bash
PATH := bin:${PATH}

default: run

deps:
		npm install
		bower install
		bundle install

run:
		node_modules/docpad/bin/docpad watch --silent --offline

generate:
		compass compile -e production --force
		node_modules/docpad/bin/docpad generate --env=production
		node_modules/gulp/bin/gulp.js minify --env=production

static: generate
		cd out/ && python -m SimpleHTTPServer 8080
