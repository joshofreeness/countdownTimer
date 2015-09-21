var app = angular.module('DueDatesApp', ['ngRoute', 'timer', 'timerFilter']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/add', {
    	controller: 'CourseController',
    	templateUrl: 'static/views/add.html'
  	})
  	.when('/', {
    	controller: 'HomeController',
    	templateUrl: 'static/views/home.html'
  	})
  	.otherwise({
    	redirectTo: '/'
  	});
});