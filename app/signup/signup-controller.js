(function(){
    angular.module('Timewaste')
    .controller('SignUpController',['$scope','$state',function($scope,$state,$http){
        $scope.createUser = function(){
            console.log($scope.newUser);
            $http.post('api/signup',$scope.newUser).success(function(response){
                                                                      
                }).error(function(error){
                    console.log(error);
                
            })
            
        }
    }]);
}());