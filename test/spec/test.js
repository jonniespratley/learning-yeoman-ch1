/*global describe, it */
'use strict';


var ENDPOINT = 'https://api.instagram.com/v1/media/popular';
var CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';

var testApp, request, options = {
	endpoint : null,
	client_id : null
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
