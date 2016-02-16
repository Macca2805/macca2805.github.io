/* global angular */
var app = angular.module("macklinMeWebApp", ["ngAnimate"]);

/* main controller */
app.controller("MainController", ["$scope",
    function ($scope) {
        
        $scope.templateUrl = "pages/home.html";
        
        $scope.goToPage = function (pageName) {
            $scope.templateUrl = "pages" + pageName + ".html";
        }
    }]);
        
/* home controller */
app.controller("HomeController", ["$scope",
    function ($scope) {
        
    }]);