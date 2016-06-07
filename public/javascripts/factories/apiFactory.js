angular.module("apiFactory", ['ngResource'])
       .factory('contentFactory', function($resource){
         return $resource('/api/:action',
          {
            action:'@action'
          },
          {
            //gets
            getSkills:{
              method:'GET',
              params:{action:'skills'}
            },
            //deletes
            deleteAllSubs:{
              method:'DELETE',
              params:{action:'subs'}
            },    
            //posts       
            submitForm:{
              method:'POST',
              params:{action:'submission'}
            }
          }
        );
       })