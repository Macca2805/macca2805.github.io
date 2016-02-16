/* global angular */
var app = angular.module("macklinMeWebApp", ["webicon", "ngAnimate"]);

/* main controller */
app.controller("MainController", ["$scope",
    function ($scope) {
        
        $scope.defaultUrl = "pages/home.html"
        $scope.templateUrl = $scope.defaultUrl;
        $scope.hideBackButton = true;
        
        $scope.goToPage = function (pageName) {
            
            var url = "pages" + pageName + ".html";
            
            $scope.templateUrl = url;
            
            $scope.hideBackButton = url === $scope.defaultUrl;
        }
    }]);
        
/* home controller */
app.controller("HomeController", ["$scope",
    function ($scope) {
        
    }]);