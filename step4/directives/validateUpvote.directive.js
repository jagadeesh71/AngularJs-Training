(function () {

    validateUpvote.$inject = ['$cookies', 'myFactoryService'];

    angular.module('catClicker').directive('validateUpvote', validateUpvote);

    function validateUpvote($cookies, facService) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, parentCtrl) {
                function myValidation(modalValue, viewValue ) {
                    var cat = scope.$eval(attr.validateUpvote);
                    var prevValue = $cookies.get(cat.id);
                    console.log(scope.catCtrl.catList);
                    var catObject = scope.catCtrl.catList.find(function(catObj) {
                        return catObj.id == cat.id;
                    });
                    
                    if (prevValue) {
                        catObject.votes = parseInt(prevValue, 10);
                        facService.setData(scope.catCtrl.catList);
                        parentCtrl.$setViewValue(prevValue);
                        parentCtrl.$render();
                    } else {
                        catObject.votes = parseInt(parentCtrl.$viewValue, 10);
                        facService.setData(scope.catCtrl.catList);
                        $cookies.put(cat.id, parseInt(parentCtrl.$viewValue,10));
                        parentCtrl.$render();
                    }
                }
                parentCtrl.$parsers.push(myValidation);
            }
        }
    }

})();