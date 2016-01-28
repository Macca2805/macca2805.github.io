/* global angular */
var app = angular.module("macklinMeWebApp", []);

/* main controller */
app.controller("MainController", ["$scope",
    function ($scope) {
        
        $scope.templateUrl = "pages/home.html";
        
    }]);
        
/* home controller */
app.controller("HomeController", ["$scope",
    function ($scope) {
        
    }]);