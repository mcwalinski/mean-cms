var userApplication = angular.module('userApp', ['angular.filter', 'notesFilter', 'apiFactory', 'ngResource'])
.config(function($locationProvider){
    //uncomment below to use Angular for page routing
    // $locationProvider.html5Mode(true);
  });


userApplication.controller('userCtrl', ['contentFactory', '$scope', function(contentFactory, $scope) {
    window.console.log('Starting Controller');
    
    contentFactory.getSkills({action:'skills'}, function(data){
        $scope.app = data.applicationInfo;
    });

}]);