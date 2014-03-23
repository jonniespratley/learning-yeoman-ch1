(function() {'use strict';
	window.App = (function() {
		function App() {
		}


		App.prototype = {
			model : null,
			tmpl : '{{#each data}}\n						<div class="col-sm-3">\n							<a href="{{link}}" target="_blank" class="thumbnail" rel="tooltip" title="{{caption.text}}">\n								<img src="{{images.low_resolution.url}}" class="img-"/>\n							</a>\n						</div>\n					{{/each}}',
			constructor : function(options) {
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
				return this;
			},
			render : function() {
				var html, template;
				console.log('render');
				$('.jumbotron').fadeOut();
				$('.marketing').empty();
				template = Handlebars.compile(this.tmpl);
				html = template(this.model);
				return $('.marketing').append(html);
			},
			onSuccess : function(response) {
				console.log('onSuccess');
				this.model = response;
				return this.render();
			},
			onError : function(error) {
				return console.log('onError');
			},
			fetch : function() {
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
			}
		};

		return App;

	})();

	console.log("'Allo from CoffeeScript!");

}).call(this);
