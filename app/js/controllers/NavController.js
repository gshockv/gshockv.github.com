'use strict';

webSiteApp.controller('NavController', 
	function MainController($scope, $location) {
		$scope.routIs = function(routeName) {
			return $location.path === routeName;
		};
	}
);
