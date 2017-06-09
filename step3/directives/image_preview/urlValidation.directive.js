(function () {
   checkValidity.$inject = ['imageUrlCheckService', '$q'];

    angular.module('catClicker').directive('checkValidity', checkValidity);
    
    function checkValidity (urlCheckService, q) {
        return {
          restrict: 'A',
          require: 'ngModel',
          link: function (scope, elem, attr, ctrl) {
              ctrl.$asyncValidators.urlValidation = function (modelValue) {
                  return urlCheckService.isValidUrl(modelValue).then(function(isValidUrl) {
                      if (!isValidUrl) {
                          return q.reject();
                      }
                      return true;
                  });
              }
          }
       }
    }
})();