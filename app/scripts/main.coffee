# global Handlebars, App 
# jshint undef: true, camelcase: false
class App
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
        
        $('.jumbotron').fadeOut()
        $('.marketing').empty()
        
								if self.options.interval
									setInterval (->
										self.fetch()
									), self.options.interval
								self.fetch()
								
        return @
    
    render: () ->
      console.log 'render'
      
      template = Handlebars.compile(@tmpl)
						html = template(@model)
						
						$('.marketing').append(html)
						$('[rel="tooltip"]').tooltip()
    
    onSuccess: (response) ->
        console.log 'onSuccess'
        @model = response
        @render()
    
    onError: (error) ->
        console.log 'onError'
    
    fetch: () ->
        console.log 'fetch'
        self = @
        $.getJSON(
            self.options.endpoint,
            client_id: self.options.client_id
        ).done((results) ->
            self.onSuccess(results)
        ).fail (error) ->
            self.onError(error)
            
            

console.log "'Allo from CoffeeScript!"

CLIENT_ID = 'ef2bd67b7dfb4bf8899999d61386d567';
ENDPOINT = 'https://api.instagram.com/v1/media/popular?callback=?';
window.app = new App(endpoint: ENDPOINT, client_id: CLIENT_ID, interval: 10000)