/* global Handlebars */
/* jshint undef: true, camelcase: false */'use strict';
$(document).ready(function() {
	var CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';
	var ENDPOINT = 'https://api.instagram.com/v1/media/popular?callback=?';
	var template = Handlebars.compile($('#media-item-tmpl').html());

	function fetchMedia() {
		$.getJSON(ENDPOINT, {
			client_id : CLIENT_ID
		}).done(function(results) {

			//handle when finished
			console.log(results);

			//Append html
			$('.marketing').append(template(results));

			//Apply tooltips
			$('[rel="tooltip"]').tooltip();
		}).fail(function(error) {
			//Handle error
			console.log('error', error);
		});
	}

	//Fetch more media every 5 seconds
	setInterval(function() {
		fetchMedia();
	}, 15000);

	//Initially fetch the recent media
	fetchMedia();

	console.log('Hello from Yeoman');
});
