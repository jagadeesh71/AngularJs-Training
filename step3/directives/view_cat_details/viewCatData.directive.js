(function () {
    angular.module('catClicker').directive('viewCatData', viewCatData);
    
    function viewCatData() {
        return{
            restrict: 'E',
			scope: {
				catData: '=catData',
				catList: '=catList',
				deleteCat: '&deleteCat',
				incrementClickCount: '&incrementCount',
				editFlag: '=isEdited'
			},
			templateUrl: './directives/view_cat_details/catDetails.template.html'
        }
    }
})();