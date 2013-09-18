'use-strict';

webSiteApp.controller('BlogPostController',
	function BlogPostController($scope, $http, $routeParams) {
		$scope.postContent = "";
		
		$scope.fetch = function() {
			$http.get('app/blog-content/blog-posts.json').success(handlePostsLoaded);
		};

		var handlePostsLoaded = function(data, status) {
			var postUrl = $routeParams.postUrl;
			var postPageUrl = _.where(data, {url : postUrl })[0].page;
			$http.get(postPageUrl).success(handlePostPageLoaded);
		};

		var handlePostPageLoaded = function(data, status) {
			$scope.postContent = data;
		};

		$scope.fetch();
	}
);
