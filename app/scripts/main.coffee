# global Handlebars, App 
# jshint undef: true, camelcase: false
'use strict'
class window.App
	model: null
	tmpl: '''
			{{#each data}}
					<div class="col-sm-3">
						<a href="{{link}}" target="_blank" class="thumbnail" rel="tooltip" title="{{caption.text}}">
							<img src="{{images.low_resolution.url}}" class="img-"/>
						</a>
					</div>
				{{/each}}
	'''
	constructor: (@options)->
		@log '1 - initialize'
		self = this
		if @options?.interval
			setInterval (=>
				@fetch()
			), @options.interval
			
		#Fetch data
		self.fetch() if @options?.endpoint
	
	render: () ->
		@log '4 - render'
		#clean ui
		$('.jumbotron').fadeOut()
		$('.marketing').empty()
		
		#compile / build template
		template = Handlebars.compile(@tmpl)
		html = template(@model)
		
		#Render to ui
		$('.marketing').append(html)
		$('[rel="tooltip"]').tooltip()
	
	onSuccess: (response) ->
			@log '3 - onSuccess'
			@model = response
			@render()
	
	onError: (error) ->
			@log 'onError'
	
	fetch: () ->
			@log '2 - fetch'
			self = @
			$.ajax(
				url: @options.endpoint
				dataType: 'jsonp'
				data: 
					client_id: @options.client_id
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
#CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';
#ENDPOINT = 'https://api.instagram.com/v1/media/popular?callback=?';
#window.app = new App(endpoint: ENDPOINT, client_id: CLIENT_ID, interval: 10000)
console.log "'Allo from CoffeeScript!"