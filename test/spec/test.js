/*global describe, it, beforeEach */
'use strict';
var assert = chai.assert,
	expect = chai, expect,
	testApp = null,
	options = {
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
		features: null,
		menu: [
			{name: 'About', route: '/about'},
			{name: 'Contact', route: '/contact'}
		]
	};

describe('Testing WebApp', function () {

	beforeEach(function (done) {
		testApp = new App(options);
		done();
	});

	describe('App', function () {
		it('should store options', function (done) {
			expect(testApp.options).to.equal(options);
			done();
		});
	});
});