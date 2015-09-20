/*app.controller('HomeController', ['$scope', 'items', function($scope, items) {
  items.success(function(data) {
    $scope.items = data;
  });
}]);*/

app.controller('HomeController', ['$scope', function($scope) {
	$scope.items = 
	[
	{
		title: '700 Compendium (Implementation)',
		datetime: 1443096000000,
		weighting: 30
	},
	{
		title: '715 Design & Impl Write Up',
		datetime: 1443268800000,
		weighting: 3
	},
	{
		title: '403 Project Week',
		datetime: 1443351600000,
		weighting: 40
	},
	{
		title: '403 ROL',
		datetime: 1444262400000,
		weighting: 2
	}
	]
}])