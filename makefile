all: style
	
style: client/less/style.less
	lessc $< client/css/style.css
	
clean:
	rm client/css/*
