'use strict';

webSiteApp.controller('NavController', 
	function NavController($scope, $location) {
		$scope.routeIs = function(routeName) {
			var loc = $location.path();
			if (loc.indexOf('project') != -1 && routeName.indexOf('project') != -1) {
				return true;
			}
			return loc === routeName;	
		};
	}
);
