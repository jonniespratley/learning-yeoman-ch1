# global Handlebars, App 
# jshint undef: true, camelcase: false
'use strict'
class window.App
		model: 
			data: []
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
        self = this
        
        if @options.interval
									setInterval (=>
										@fetch()
									), @options.interval
									
								#Fetch data
								self.fetch() if @options.endpoint
								
        return @
    
    render: () ->
      console.log 'render'
      
      $('.jumbotron').fadeOut()
      $('.marketing').empty()
      
      template = Handlebars.compile(@tmpl)
						html = template(@model)
						
						$('.marketing').append(html)
    
    onSuccess: (response) ->
        console.log 'onSuccess'
        @model = response
        @render()
    
    onError: (error) ->
        console.log 'onError'
    
    fetch: () ->
        console.log 'fetch'
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
            
            

console.log "'Allo from CoffeeScript!"

#CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';
#ENDPOINT = 'https://api.instagram.com/v1/media/popular?callback=?';
#window.app = new App(endpoint: ENDPOINT, client_id: CLIENT_ID, interval: 10000)