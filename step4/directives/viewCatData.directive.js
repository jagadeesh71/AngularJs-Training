(function () {
    angular.module('catClicker').directive('viewCatData', viewCatData);
    
    function viewCatData() {
        return{
            restrict: 'E',
			scope: {
				catData: '=catData',
				editFlag: '=editFlag',
				catList: '=catList',
				deleteCat: '&deleteCat',
				incrementClickCount: '&incrementCount'
			},
			templateUrl: './views/catDetails.template.html',
        }
    }
})();