angular.module('contatooh').controller('ContactsController', function($scope) {
	$scope.total     = 0; 
	$scope.filtering = '';
	$scope.contacts  = [
		{
			id: 1,
			name: 'Cont1',
			email: 'cont1@mail.com'
		},
		{
			id: 2,
			name: 'Cont2',
			email: 'cont2@mail.com'
		},
		{
			id: 3,
			name: 'Cont3',
			email: 'cont3@mail.com'
		}
	];

	$scope.incremental = function() {
		$scope.total++;
	};
});