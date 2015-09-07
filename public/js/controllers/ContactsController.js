angular.module('contatooh').controller('ContactsController', function($scope) {
	$scope.total = 0; 
	$scope.incremental = function() {
		$scope.total++;
	};
});