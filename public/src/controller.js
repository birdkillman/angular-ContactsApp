angular.module('ContactsApp')
	.controller('ListController', function($scope, Contact, $location){
		$scope.contacts = Contact.query();
		$scope.fields = ['firstName', 'lastName'];

		$scope.sort = function (field){
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		}

		$scope.sort.field = 'firstName';
		$scope.sort.order = false; // Desc

		$scope.show = function (id){
			$location.url('/contact/' + id);
		}
	})
	.controller('NewController', function($scope, Contact, $location){
		//Create a new contact object
		$scope.contact = new Contact({
			firstName: 	['', 'text'],
			lastName:  	['', 'text'],
			email: 		['', 'email'],
			homePhone: 	['', 'tel'],
			mobilePhone:['', 'tell'],
			birthday: 	['', 'date'],
			website: 	['', 'url'],
			address: 	['', 'text'],
		});
		

		$scope.save = function (){
			//$scope.newContact is the form name in the view
			if($scope.newContact.$invalid){
				$scope.$broadcast('record:invalid');
			} else {
				//form is valid
				$scope.contact.$save();
				$location.url('/contacts');
			}
		}

		
	});