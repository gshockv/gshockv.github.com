'use strict';

webSiteApp.controller('NavController', 
	function NavController($scope, $location) {
		$scope.routeIs = function(routeName) {
			var loc = $location.path();
			return loc === routeName;	
		};
	}
);
