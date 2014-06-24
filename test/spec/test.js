/*global describe, it */
'use strict';
(function () {
	describe( 'Learning Yeoman Ch1 Test', function () {
		var testApp;
		var options = {
			sitetitle: 'Learning Yeoman',
			sitecopy: '(c) 2014',
			feature: {
				title: 'Chapter 1',
				body: 'a starting point for a modern web application.',
				image: 'http://goo.gl/kZZ6dX',
				endpoint: 'http://jonniespratley.me:8181/api/v2/learning-yeoman-ch1/posts'
			},
			features: null,
			menu: [
				{
					name: 'About',
					route: '/about'
				},
				{
					name: 'Contact',
					route: '/contact'
				}
			]
		};

		beforeEach( function () {
			testApp = App.init( options );
		} );

		it( 'should store options on the model', function () {
			expect( testApp.config ).toEqual( options );
		} );

	} );
})();