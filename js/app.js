var app = angular.module('DueDatesApp', ['ngRoute', 'timer', 'timerFilter']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'HomeController',
    	templateUrl: 'views/home.html'
  	})
  	.otherwise({
    	redirectTo: '/'
  	});
});