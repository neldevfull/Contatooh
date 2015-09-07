angular.module('contatooh', ['ngRoute'])
.config(function($routeProvider) {
	// Config routes	
	$routeProvider.when('/contacts', {
		templateUrl: 'partials/contacts.html',
		controller: 'ContactsController'
	})
	.when('/contact/:contactId', {
		templateUrl: 'partials/contact.html',
		controller: 'ContactController'
	})
	.otherwise({
		redirectTo: '/contact'
	});
});   