(function() {
   angular.module('catClicker').directive('formTemplate', formTemplate);
    
   formTemplate.$inject = ['catUtilityService'];	
   function formTemplate(catUtilityService) {
       return {
           restrict: 'E',
           scope: {
              catObj: '=catObj',
              saveCatDetails: '&saveCatDetails',
              cancel: '&cancel'
           },
           templateUrl: './directives/form/form.template.html',
           link: function(scope) {
			   var result,
				   catList;
			   scope.isDuplicate = false;
               scope.buttonValue = scope.catObj.id ? 'Update' : 'Save';
			   
			   catUtilityService.getCatList().then(function(result) {
				   catList = result;
			   });
			   
			   scope.duplicateNameCheck = function (data) {
					if (data.id) {
						result = catList.filter(function (cat) {
							return data.name && cat.name.toLowerCase() === data.name.toLowerCase() && cat.id != data.id;
						});
					}
					else {
						result = catList.filter(function (cat) {
							return cat.name.toLowerCase() === data.name && data.name.toLowerCase();
						});
					}
					scope.isDuplicate = (result.length !== 0);
				}
           }
        }
   }
})();