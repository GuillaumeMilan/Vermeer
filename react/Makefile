all:
	make clean -s
	make dist/main.js -i -s
	make check_errors -s

dist/main.js:
	node ./node_modules/webpack/bin/webpack.js --config ./webpack.config.js --json > dist/build.log

clean:
	rm -f dist/*

check_errors:
	node utils.js

