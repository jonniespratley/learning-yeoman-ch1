/**
 * 		<script>
			$(document).ready(function() {
				'use strict';
				
				var CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';
				var ENDPOINT = 'https://api.instagram.com/v1/media/popular?callback=?';

				//Initialize the app
				window.app = new App({
					endpoint : ENDPOINT,
					client_id : CLIENT_ID,
					interval : 15000
				});
				window.app.init();

				console.log('Hello from Yeoman');
			});
		</script>
 */

/* global Handlebars, App */
/* jshint undef: true, camelcase: false */
(function(exports) {'use strict';
	function App(options) {
		this.options = options || {};
	}


	exports.App = App;

	App.prototype = {
		//Hold template instance
		tmpl : $('#media-item-tmpl').html(),
		//Hold view data
		model : null,
		//I handle initializing the view.
		init : function() {
			var self = this;
			if (self.options.interval) {
				setInterval(function() {
					self.fetchMedia();
				}, self.options.interval);
			}
			self.fetchMedia();

		},
		//I handle rendering the view.
		render : function() {
			var template = Handlebars.compile(this.tmpl);
			var html = template(this.model);

			$('.marketing').append(html);
			$('[rel="tooltip"]').tooltip();
		},
		//Handle success
		onSuccess : function(results) {
			console.log(results);
			this.model = results;
			this.render();
		},
		//Handle error
		onError : function(error) {
			console.log('error', error);
		},
		//I handle fetching the most recent media from Instagram.
		fetchMedia : function() {
			var self = this;
			$.getJSON(self.options.endpoint, {
				client_id : self.options.client_id
			}).done(function(results) {
				self.onSuccess(results);
			}).fail(function(error) {
				self.onError(error);
			});
		}
	};
})(this);
