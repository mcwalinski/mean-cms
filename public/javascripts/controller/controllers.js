var userApplication = angular.module('userApp', ['angular.filter', 'notesFilter', 'ngResource'])
.config(function($locationProvider){

});

userApplication.controller('userCtrl', ['$scope', '$http', 'apiService',
  function ($scope, $http, apiService) {

     apiService.getSkills.then(function(data){
          $scope.skills = data;
          window.console.log($scope.skills);
     });

     apiService.getWork.then(function(data){
          $scope.work = data;
          window.console.log($scope.work);
     });

}]);