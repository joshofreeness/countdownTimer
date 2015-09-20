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
	},
	{
		title: '715 Evaluation Write Up',
		datetime: 1444561140000,
		weighting: 4
	},
	{
		title: '403 Test',
		datetime: 1444820400000,
		weighting: 15
	},
	{
		title: '726 Final Report',
		datetime: 1444906800000,
		weighting: 25
	},
	{
		title: '715 Final Report & Slides',
		datetime: 1445165940000,
		weighting: 5
	},
	{
		title: '715 Final Demos, Repo Freeze, Video',
		datetime: 1445166000000,
		weighting: 27.5
	},
	{
		title: '403 ROL',
		datetime: 1445472000000,
		weighting: 2
	},
	{
		title: '715 Exam',
		datetime: 1446167700000,
		weighting: 40
	},
	{
		title: '726 Exam',
		datetime: 1447290900000,
		weighting: 40
	}
	]
}])