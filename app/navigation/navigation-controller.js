(function(){
    angular.module('Timewaste').controller('NavigationController',['$scope','$state','$state',function($scope, $http, $state){
        $scope.logUserIn= function(){
            $http.post('api/user/login',$scope.login).success(function(response){
                localStorage.setItem('User-Data', JSON.stringify(response));
            }).error(function(error){
                console.error(error);
            });
        }    
    }]);
    
}());