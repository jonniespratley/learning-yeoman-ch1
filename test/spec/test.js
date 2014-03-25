/*global describe, it */'use strict';
(function() {
	describe('Testing App', function() {
		var testApp;
		var options = {
			sitetitle : 'Learning Yeoman',
			sitecopy : '(c) 2014',
			feature : {
				title : 'Chapter 1',
				body : 'a starting point for a modern web application.',
				image : 'http://goo.gl/kZZ6dX',
				endpoint : null
			},
			features : [],
		};

		it('should store options on the model', function() {
			testApp = new App(options);
			expect(testApp.model).toEqual(options);
		});

	});
})();
