/*global App, expect, it, describe */
'use strict';
var testApp = null;
var options = {
	el: '.container',
	sitetitle: 'Learning Yeoman',
	sitecopy: '2014 Copywrite',
	version: '0.0.1',
	feature: {
		title: 'Chapter 1',
		body: 'a starting point for a modern web application.',
		image: 'http://goo.gl/kZZ6dX',
		endpoint: 'http://jonniespratley.me:8181/api/v2/learning-yeoman-ch1/posts'
	},
	features: null
};
testApp = new App( options );
describe( 'Testing WebApp', function () {
	describe( 'App', function () {
		it( 'should store options', function (done) {
			expect( testApp.options, 'App.options' ).to.equal( options );
			done();
		} );
	} );
} );
