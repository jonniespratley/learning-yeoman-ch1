/*global describe, it */'use strict';

(function() {
	describe('Testing Yeoman WebApp', function() {

		var ENDPOINT = 'https://api.instagram.com/v1/media/popular?callback=?';
		var CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';

		var testApp, options = {
			endpoint : null,
			client_id : null
		};
		var request, mockResponse = {
			data : [{
				id : 0,
				images : {
					thumbnail : {
						url : ''
					}
				}
			}, {
				id : 1,
				images : {
					thumbnail : {
						url : ''
					}
				}
			}]
		};

		describe('window.App', function() {
			beforeEach(function() {
				//jasmine.Ajax.useMock();
				//request = mostRecentAjaxRequest();
				spyOn($, 'ajax').andCallFake(function(params) {
					params.success('1');
				});

			});

			it('should have options', function() {
				testApp = new App(options);
				expect(testApp.options).toEqual(options);
			});

			describe('fetch media', function() {

				it('should fetch successfully', function() {
					//Set options
					options = {
						endpoint : ENDPOINT,
						client_id : CLIENT_ID
					};

					//Create app
					testApp = new App(options);
					spyOn(testApp, 'fetch');

					//Test
					expect(testApp.fetch).toHaveBeenCalled();
				});

			});

		});
	});
})();
