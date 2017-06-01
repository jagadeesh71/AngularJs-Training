(function() {
   angular.module('catClicker').directive('formTemplate', formTemplate);
    
   function formTemplate() {
       return {
           restrict: 'E',
           scope: {
              catObj: '=catObj',
              checkDuplicate: '&checkDuplicate',
              isDuplicate: '=isDuplicateFlag',
              saveCatDetails: '&saveCatDetails',
              cancel: '&cancel'
           },
           templateUrl: './views/form.template.html',
           link: function(scope) {
               scope.buttonValue = scope.catObj.id ? 'Update' : 'Save';
           }
        }
   }
})();