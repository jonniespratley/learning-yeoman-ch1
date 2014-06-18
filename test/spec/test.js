/*global describe, it */
'use strict';


var ENDPOINT = 'https://api.instagram.com/v1/media/popular';
var CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';

var testApp, request, options = {
	el: '.container',
	sitetitle : 'Learning Yeoman',
	sitecopy : '2014 Copywrite',
	version: '0.0.1',
	feature : {
		title : 'Chapter 1',
		body : 'a starting point for a modern web application.',
		image : 'http://goo.gl/kZZ6dX',
		endpoint : 'http://jonniespratley.me:8181/api/v2/learning-yeoman-ch1/posts'
	},
	features : null,
	menu: [
		{name: 'About', route: '/about'},
		{name: 'Contact', route: '/contact'}
	]
};
testApp = new App(options);



test('App', function(){
	ok(testApp.options !== null);
});

(function() {
	describe('Testing WebApp', function() {



		describe('App', function() {

			it('should store options', function() {

				expect(testApp.options).toEqual(options);
			});

			it("should make JSONP request to the correct URL", function() {

				spyOn($, "ajax");

				//Create new app with endpoint
				testApp = new App({
					endpoint : ENDPOINT
				});

				//Set request
				request = $.ajax.mostRecentCall.args[0];

				//Assert
				expect(request.dataType).toEqual('jsonp');
				expect(request.url).toEqual(ENDPOINT);
			});

		});
	});
})();
