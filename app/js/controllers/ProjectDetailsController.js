'use-strict';

webSiteApp.controller('ProjectDetailsController',
	function ProjectDetailsController($scope, $http, $routeParams) {
        $scope.projectDetails = "";
        
        $scope.fetchProjectDetailsPage = function() {
            var projectName = $routeParams.projectName;
            $http.get('app/projects-details/' + projectName + ".html").success(detailsLoaded);
        };
        
        var detailsLoaded = function(data, status) {
            $scope.projectDetails = data;
        };
        
        $scope.fetchProjectDetailsPage();
	}
);
