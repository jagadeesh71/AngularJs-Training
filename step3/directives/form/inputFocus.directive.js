(function () {
   angular.module('catClicker').directive('inputFocus', inputFocus);
    
   function inputFocus() {
       return {
           restrict: 'A',
           scope: {
               inputModel: '=inputFocus'
           },
           link: function (scope, elem, attr, ctrl) {
               scope.$watch('inputModel', function (newValue) {
                   if(newValue === true) {
                       elem[0].focus();
                       newValue = false;
                   }
               })
           }
       }
   }
})();