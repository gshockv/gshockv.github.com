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
		});
});
