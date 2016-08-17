JS_FILES 	:= $(wildcard client/js/src/*.js)
JS_OUTPUT 	= client/js/index.js
JS_ENTRYPOINT 	= client/js/src/index.js
 
WEBCLIENT 	= chromium
URL_ENTRYPOINT	= localhost:8080

LESS_ENTRYPOINT = client/less/style.less
CSS_OUTPUT	= client/css/style.css

.PHONY: all test clean

all: $(CSS_OUTPUT) $(JS_OUTPUT)
	
$(CSS_OUTPUT): $(LESS_ENTRYPOINT)
	lessc $< $(CSS_OUTPUT)
	
$(JS_OUTPUT): $(JS_FILES) 
	browserify -d -t strictify $(JS_ENTRYPOINT) -o $(JS_OUTPUT)

serve: 
	node server/server.js

launch: 
	$(WEBCLIENT) $(URL_ENTRYPOINT)

see: serve launch

test:
	mocha test/marketplace.js

clean:
	rm client/css/*
	rm $(JS_OUTPUT)
