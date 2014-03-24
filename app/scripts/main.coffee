# global Handlebars, App 
# jshint undef: true, camelcase: false
'use strict'
class window.App
	model: 
		feature:
			title: 'Chapter 1'
			image: 'https://dl.dropboxusercontent.com/u/26906414/learning_yeoman/images/yo-hbp.png'
			body: 'a starting point for a modern html5 web application.'
		features: []
	tmpl: '''
			<div class="jumbotron">
				<h1>{{feature.title}}</h1>
				<img src="{{feature.image}}" class="img-"/>
				<p class="lead">
					{{feature.body}}
				</p>
			</div>
			{{#each features}}
			<div class="media">
		    <img class="media-object pull-left img-thumbnail" src="{{image}}" alt="{{title}}"/>
		    <h4>{{title}}</h4>
		    <p>{{body}}</p>
		  </div>
				{{/each}}
	'''
	constructor: (@options)->
		@log '1 - initialize'
		self = this
		@render()
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
		$('.marketing').html(html)
		#$('[rel="tooltip"]').tooltip()
	
	onSuccess: (response) ->
			@log '3 - onSuccess'
			@model.features = response if not response.data
			@render()
	
	onError: (error) ->
			@log 'onError'
	
	fetch: () =>
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