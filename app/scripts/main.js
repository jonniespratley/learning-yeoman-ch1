'use strict';

window.App = (function () {
	App.prototype.model = {
		feature: {
			title: 'Chapter 1',
			image: 'https://dl.dropboxusercontent.com/u/26906414/learning_yeoman/images/yo-hbp.png',
			body: 'a starting point for a modern html5 web application.'
		},
		features: []
	};

	App.prototype.tmpl = '<div class="jumbotron">\n	<h1>{{feature.title}}</h1>\n	<img src="{{feature.image}}" class="img-"/>\n	<p class="lead">\n		{{feature.body}}\n	</p>\n</div>\n{{#each features}}\n<div class="media">\n		    <img class="media-object pull-left img-thumbnail" src="{{image}}" alt="{{title}}"/>\n		    <h4>{{title}}</h4>\n		    <p>{{body}}</p>\n		  </div>\n	{{/each}}';

	function App(options) {
		var self, _ref;
		this.options = options;

		this.log( '1 - initialize' );
		self = this;
		if (this.options.feature.endpoint) {
			self.fetch();
		}
	}

	App.prototype.render = function () {
		var html, template;

		$( this.options.el ).empty();
		template = Handlebars.compile( this.tmpl );
		html = template( this.model );

		this.log( '4 - render' );
		return $( this.options.el ).html( html );
	};

	App.prototype.onSuccess = function (response) {
		this.log( '3 - onSuccess' );
		if (!response.data) {
			this.model.features = response;
		}
		return this.render();
	};

	App.prototype.onError = function (error) {
		return this.log( error );
	};

	App.prototype.fetch = function () {
		var self;
		this.log( '2 - fetch' );
		self = this;
		return $.ajax( {
			url: this.options.feature.endpoint,
			dataType: 'jsonp',
			success: function (results) {
				return self.onSuccess( results );
			},
			error: function (error) {
				return self.onError( error );
			}
		} );
	};

	App.prototype.log = function (what) {
		return typeof console !== "undefined" && console !== null ? console.log( what ) : void 0;
	};

	return App;

})();

console.log( "'Allo, Allo!" );
