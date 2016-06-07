angular.module('userApp')
.factory("apiService", function($resource) {
  window.console.log('start factory');
 return $resource("/api/skills");
});