(function() {'use strict';
	window.App = (function() {
		App.prototype.model = null;

		App.prototype.tmpl = $('#media-item-tmpl').html();

		function App(options) {
			var self, _this = this;
			this.options = options;
			self = this;
			if (this.options.interval) {
				setInterval((function() {
					return _this.fetch();
				}), this.options.interval);
			}
			if (this.options.endpoint) {
				self.fetch();
			}
		}


		App.prototype.render = function() {
			var html, template;
			console.log('render');
			$('.jumbotron').fadeOut();
			$('.marketing').empty();
			template = Handlebars.compile(this.tmpl);
			html = template(this.model);
			return $('.marketing').append(html);
		};

		App.prototype.onSuccess = function(response) {
			console.log('onSuccess');
			this.model = response;
			return this.render();
		};

		App.prototype.onError = function(error) {
			return console.log('onError');
		};

		App.prototype.fetch = function() {
			var self;
			console.log('fetch');
			self = this;
			return $.ajax({
				url : this.options.endpoint,
				dataType : 'jsonp',
				data : {
					client_id : this.options.client_id
				},
				success : function(results) {
					return self.onSuccess(results);
				},
				error : function(error) {
					return self.onError(error);
				}
			});
		};

		return App;

	})();

	console.log("'Allo from CoffeeScript=> JavaScript!");

}).call(this);
