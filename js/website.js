angular.module("website", [])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {template: 'partials/home.html'})
			.when('/projects', {template: 'partials/projects.html'})
			.when('/blog', {template: 'partials/blog.html'})
			.when('/about', {template: 'partials/about.html'})
			.otherwise({reditectTo: '/', template: '/partials/home.html'})
	});
;

function MainCtrl($scope) {

}
