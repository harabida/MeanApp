angular.module('myApp', ['ngResource','ngRoute']);

angular.module('myApp').config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.when('/',{
        templateUrl : '/partials/main/views/main',
        controller : 'mainCtrl'
    });

}]);
