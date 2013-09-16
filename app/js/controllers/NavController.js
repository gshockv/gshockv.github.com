'use strict';

webSiteApp.controller('NavController', 
	function MavController($scope, $location) {
		$scope.routIs = function(routeName) {
			return $location.path() === routeName;
		};
	}
);
