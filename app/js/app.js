'use strict';

var webSiteApp = angular.module("webSiteApp", []);

webSiteApp.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			controller: 'HomeController',
			templateUrl: 'home.html'
		}).
		when('/projects', {
			controller: 'ProjectsController',
			templateUrl: 'projects.html'
		}).
		when('/blog', {
			controller: 'BlogController',
			templateUrl: 'blog.html'
		}).
		when('/about', {
			controller: 'AboutController',
			templateUrl: 'about.html'
		});
});
