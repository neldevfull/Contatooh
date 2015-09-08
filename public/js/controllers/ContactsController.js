angular.module('contatooh').controller('ContactsController', function($scope, $http) {	
	$scope.filtering = '';
	$scope.contacts  = [];	
	// Get Contacts list
	$http.get('/contacts')
	.success(function(data) {
		$scope.contacts = data;
	})
	.error(function(statusText) {
		console.log('It could not get the Contact list');
		console.log(statusText);
	});
});