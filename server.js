var express=require('express'),
	app	   = express();

app
	.use(express.static('./public'))
	.get('*', function(request, response){
		response.sendfile('public/main.html');
	})
	.listen(3000);