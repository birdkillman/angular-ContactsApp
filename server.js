var express= require('express'),
	api	   = require('./api'),
	app	   = express();

app
	.use(express.static('./public'))
	.use('/api', api)
	.get('*', function(request, response){
		response.sendfile('public/main.html');
	})
	.listen(3000);