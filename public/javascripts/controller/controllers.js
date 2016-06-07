var userApplication = angular.module('userApp', ['angular.filter', 'notesFilter', 'ngResource'])
.config(function($locationProvider){

});

userApplication.controller('userCtrl', ['$scope', '$http', 'apiService',
  function ($scope, $http, apiService) {
	  
  apiService.query({}, function(data) {
	$scope.post = data.skill;
  });
	
	window.console.log($scope.post);

}]);
