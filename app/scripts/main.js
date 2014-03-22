$(document).ready(function() {
	var CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';
	var CLIENT_SECRET = '8c01b82fba454285a41a1666144538cf';
	var ENDPOINT = 'https://api.instagram.com/v1/media/popular?callback=?';

	var data = null;

	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request
	var jqxhr = $.getJSON(ENDPOINT, {
		client_id : CLIENT_ID
	}, function(results) {
		console.log('success', results);
	}).done(function(results) {
		console.log('second successs', results);
	}).fail(function(error) {
		console.log('error', error);
	}).always(function() {
		console.log('always', this);
	});
	// Perform other work here

	console.log('\'Allo \'Allo!');
});
