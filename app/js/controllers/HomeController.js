'use-strict';

webSiteApp.controller('HomeController',
	function HomeController($scope, $http) {
		$scope.posts = [];

		$scope.fetch = function() {
			$http.get('app/blog-content/blog-posts.json').success(function(data, status) {
				$scope.posts = _.first(data, 2);
			});
		};

		$scope.fetch();
	}
);
