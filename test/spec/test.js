/*global describe, it, expect, App */
'use strict';
var testApp = null;
var config = {
	el: '.container',
	sitetitle: 'Learning Yeoman',
	sitecopy: '2014 Copywrite',
	version: '0.0.1',
	feature: {
		title: 'Chapter 1',
		body: 'a starting point for a modern web application.',
		image: 'http://goo.gl/kZZ6dX'
		//endpoint: 'http://goo.gl/DuHyjx'
	},
	features: null
};
testApp = App.init( config );
describe( 'Learning Yeoman Chapter 1 Test', function () {
	describe( 'App.init', function () {
		it( 'should store config on instance', function (done) {
			expect( testApp.config, 'App.config' ).to.equal( config );
			done();
		} );
	} );
} );
