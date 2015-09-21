var app = angular.module('DueDatesApp', ['ngRoute', 'timer', 'timerFilter']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'HomeController',
    	templateUrl: 'static/views/home.html'
  	})
  	.when('/add', {
    	controller: 'CourseController',
    	templateUrl: 'static/views/add.html'
  	})
  	.otherwise({
    	redirectTo: '/'
  	});
});