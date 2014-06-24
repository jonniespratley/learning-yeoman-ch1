'use strict';

var App = {
	init: function (options) {
		console.log( '1 - initialize' );
		this.config = config;
		if (this.config.feature && this.config.feature.endpoint) {
			this.fetch();
		}
		return this;
	},
	render: function () {
		var html, template;
		console.log( '4 - render' );
		template = Handlebars.compile( $( this.config.el ).find( 'script[type="text/x-handlebars-template"]' ).html() );
		html = template( this.config );
		return $( this.config.el ).html( html );
	},
	onSuccess: function (response) {
		console.log( '3 - onSuccess' );
		this.config.features = response;
		this.render();
	},
	onError: function (error) {
		return this.log( error );
	},
	fetch: function () {
		var self;
		console.log( '2 - fetch' );
		self = this;
		return $.ajax( {
			url: this.config.feature.endpoint,
			dataType: 'jsonp',
			success: function (results) {
				return self.onSuccess( results );
			},
			error: function (error) {
				return self.onError( error );
			}
		} );
	}
};

console.log( "Allo, Allo!" );