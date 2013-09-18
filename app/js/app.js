'use strict';

var webSiteApp = angular.module("webSiteApp", []);

webSiteApp.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			controller: 'HomeController',
			templateUrl: 'app/home.html'
		}).
		when('/projects', {
			controller: 'ProjectsController',
			templateUrl: 'app/projects.html'
		}).
		when('/blog', {
			controller : 'BlogController',
			templateUrl : 'app/blog.html'
		}).
		when('/blog/:postUrl', {
			controller: 'BlogPostController',
			templateUrl: 'app/blog-post.html'
		}).
		when('/about', {
			controller: 'AboutController',
			templateUrl: 'app/about.html'
		});
});
