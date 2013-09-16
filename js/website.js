'use strict';

var webSiteApp = angular.module("webSiteApp", []);

webSiteApp.config(function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'home.html'
			}).
			when('/projects', {
				templateUrl: 'projects.html'
			}).
			when('/blog', {
				templateUrl: 'blog.html'
			}).
			when('/about', {
				templateUrl: 'about.html'
			});
	});


function MainCtrl($scope) {

}
