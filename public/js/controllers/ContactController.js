angular.module('contatooh').controller('ContactController', function($scope, $routeParams, Contact) {
	if($routeParams.contactId) {		
		Contact.get({ id: $routeParams.contactId },
			function(contact) {
				$scope.contact = contact;
				console.log('Success!');
			},
			function(error) {
				$scope.message = 'It could not get contact';
				console.log(error);
			}
		);
	}
	else {
		$scope.contact = new Contact();
	}

	$scope.save = function() {
		$scope.contact.$save()
			.then(function() {
				$scope.message = 'Saved successfully';
				$scope.contact = new Contact();
			})
			.catch(function(error) {
				$scope.message = 'It could not be saved';
			});
	};
});