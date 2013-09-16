'use strict';

var webSiteApp = angular.module("webSiteApp", []);

webSiteApp.config(function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/home.html'
			}).
			when('/projects', {
				templateUrl: 'views/projects.html'
			}).
			when('/blog', {
				templateUrl: 'views/blog.html'
			}).
			when('/about', {
				templateUrl: 'views/about.html'
			});
	});


function MainCtrl($scope) {

}
