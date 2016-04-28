angular.module('myApp').controller('navBarLoginCtrl', ['$scope','$http',function($scope,$http){
    console.log('login ctrl loading');
    $scope.signin = function(email,pwd){
        console.log('logging in ' + email);
        $http.post('/login',{username : email, password : pwd}).then(function(response){
            console.log(response.data);
            if(response.data.success){
                console.log('login successful');
            }else{
                console.log('login failed');
            }
        });
    };
}]);
