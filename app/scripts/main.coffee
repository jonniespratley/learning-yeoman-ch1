'use strict'
class window.App
	el: '.container'
	constructor: (@model)->
		@log '1 - initialize'
		@fetch() if @model.feature?.endpoint
	
	render: () ->
		@log '4 - render'
		template = Handlebars.compile(
			$( @el ).find('script[type="text/x-handlebars-template"]').html()
		)
		html = template(@model)
		$(@el).html(html)
	
	onSuccess: (response) ->
			@log '3 - onSuccess'
			@model.features = response
			@render()
	
	onError: (error) ->
			@log error
	
	fetch: () =>
			@log '2 - fetch'
			self = @
			$.ajax(
				url: @model.feature.endpoint
				dataType: 'jsonp'
				success: (results) -> 
					self.onSuccess(results)
				error: (error) -> 
					self.onError(error)
			)
	
	log: (what)->
		console?.log(what)
	


###
We could initialize the app this way but then it is not testable standalone.
###
console.log "'Allo from CoffeeScript!"