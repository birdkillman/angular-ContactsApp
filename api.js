var express 	= require('express'),
	Bourne  	= require('bourne'),
	bodyParser 	= require('body-parser'),
	db 			= new Bourne('data.json'),
	router 		= express.Router();

router
	.use(function (request, response, next){
		if(!request.user) request.user = { id: 1 };
		next();
	})
	.use(bodyParser.json())
	.route('/contact')
		.get(function(request, response){
			db.find({ userId: parseInt(request.user.id, 10) }, function(error, data){
				response.json(data);
			});
		})
		.post(function(request, response){
			var contact = request.body;
			contact.userId = request.user.id;

			db.insert(contact, function(error, data){
				response.json(data)
			});
		})

router
	.param('id', function(request, response, next){
		request.dbQuery = {id: parseInt(request.params.id, 10) }
	})
	.route('contact/:id')
		.get(function(request, response){
			db.findOne(request.dbQuery, function (error, data){
				response.json(data);
			});
		})
		.put(function(request, response){
			var contact = request.body;
			delete contact.$promise;
			delete contact.$resolved;
			db.update(request.dbQuery, contact, function(error, data){
				response.json(data[0]); // update a single item in the array
			});
		})
		.delete(function(request, response){
			db.delete(request.dbQuery, function(){
				response.json(null);
			});
		})

module.exports = router;