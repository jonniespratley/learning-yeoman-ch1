/*global describe, it */'use strict';
(function() {
	describe('Testing WebApp', function() {

		var ENDPOINT = 'https://api.instagram.com/v1/media/popular';
		var CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';

		var testApp, request, options = {
			endpoint : null,
			client_id : null
		};

		describe('App', function() {
			beforeEach(function() {
				testApp = undefined;
			});

			it('should store options', function() {
				testApp = new App(options);
				expect(testApp.options).toEqual(options);
			});

			it("should make JSONP request to the correct URL", function() {
				spyOn($, "ajax").andCallThrough();

				//Create new app with endpoint
				testApp = new App({
					endpoint : ENDPOINT,
					client_id : CLIENT_ID
				});

				//Set request
				request = $.ajax.mostRecentCall.args[0];

				testApp.log(request);

				//Assert
				expect(request.dataType).toEqual('jsonp');
				expect(request.url).toEqual(ENDPOINT);
				expect(request.data).toEqual({
					client_id : CLIENT_ID
				});
			});

		});
	});
})();
