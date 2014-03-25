'use strict'
class window.App
	constructor: (@config)->
		@log '1 - initialize'
		@fetch() if @config.feature?.endpoint
	
	render: () ->
		@log '4 - render'
		template = Handlebars.compile(
			$( @config.el ).find('script[type="text/x-handlebars-template"]').html()
		)
		html = template(@config)
		$(@config.el).html(html)
	
	onSuccess: (response) ->
			@log '3 - onSuccess'
			@config.features = response
			@render()
	
	onError: (error) ->
			@log error
	
	fetch: () =>
			@log '2 - fetch'
			self = @
			$.ajax(
				url: @config.feature.endpoint
				dataType: 'jsonp'
				success: (results) -> 
					self.onSuccess(results)
				error: (error) -> 
					self.onError(error)
			)
	
	log: (what)->
		console?.log(what)
	
console.log "'Allo from CoffeeScript!"