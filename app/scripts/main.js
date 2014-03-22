$(document).ready(function() {
	var CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';
	var CLIENT_SECRET = '8c01b82fba454285a41a1666144538cf';
	var ENDPOINT = 'https://api.instagram.com/v1/media/popular?callback=?';
	var data, html, template = Handlebars.compile($('#media-item-tmpl').html());

	function fetchMedia() {
		var jqxhr = $.getJSON(ENDPOINT, {
			client_id : CLIENT_ID
		}).done(function(results) {
			$('#media').append(template(results));
		}).fail(function(error) {
			console.log('error', error);
		});
	};

	setInterval(function() {
		console.log('fetch');
		fetchMedia();
	}, 5000);
	fetchMedia();
	console.log('\'Allo \'Allo!');
});
