angular.module('routes', ['ngRoute']).config(function($routeProvider) {
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
		redirectTo: '/contacts'
	});
});   