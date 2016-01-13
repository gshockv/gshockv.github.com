'use strict';

webSiteApp.controller('NavController', 
	function NavController($scope, $location) {
		$scope.routeIs = function(routeName) {
			var loc = $location.path();
			if (loc.indexOf('blog') != -1 && routeName.indexOf('blog') != -1) {
				return true;
			}
			return loc === routeName;	
		};
	}
);
