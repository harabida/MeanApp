angular.module('myApp', ['ngResource','ngRoute']);

angular.module('myApp').config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.when('/',{
        templateUrl : 'partials/main',
        controller : 'mainCtrl'
    });

}]);
angular.module('myApp').controller('mainCtrl', ['$scope',function($scope){
    $scope.var = "hello angular";
}]);