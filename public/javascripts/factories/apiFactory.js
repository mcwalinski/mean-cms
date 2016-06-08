// angular.module('userApp')
// .factory("apiService", function($resource) {
//   window.console.log('start factory');
//   return $resource("/api/skills");
// });

angular.module('userApp')
.factory("apiService", ['$http', '$resource', function($http, $resource) {
    return {
        getSkills: (function(response) {
            return $http.get('/api/skills')
            .then(function(response) {
              return response.data;
            });
        })(),
        getWork: (function(response) {
            return $http.get('/api/work')
            .then(function(response) {
              return response.data;
            });
        })()
    };
    return apiService;
}]);