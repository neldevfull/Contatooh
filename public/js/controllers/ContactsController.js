angular.module('contatooh').controller('ContactsController',function($scope, $resource, $http) {	
	$scope.filtering = '';
	$scope.contacts  = [];		
	var Contacts = $resource('/contacts/:id');
	// Initialize
	function init() {
		getContacts();	
	} 	
	// Get Contacts list
	function getContacts() {		
		Contacts.query (
			function(contacts) {
				$scope.contacts = contacts;
			},
			function(statusText) {
				console.log('It could not get the Contact list');
				console.log(statusText);
			}
		);
	}
	// Run methods	
	init();
});