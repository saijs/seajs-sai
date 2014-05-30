
watch:
	@seatools site -w

#build:
	#@rm -rf dist
	#@mkdir dist
	#@sed "s/seajs-monitor/seajs-monitor-debug/" src/seajs-monitor.js >dist/seajs-monitor-debug.js
	#@uglifyjs src/seajs-monitor.js -o dist/seajs-monitor.js -mc
	#@make size

#test:
	##@make test -C ../seajs
	#@seatools test --local

#size:
	#@../seajs/tools/size.sh seajs-monitor

build:
	@seatools build

test:
	@seatools site
	@seatools test --local
	@seatools test --http

totoro:
	@seatools site
	@seatools test --totoro

size:
	@seatools size
