(function () {

    validateUpvote.$inject = ['$cookies', 'myFactoryService'];

    angular.module('catClicker').directive('validateUpvote', validateUpvote);

    function validateUpvote($cookies, facService) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, parentCtrl) {
                function myValidation() {
                    var cat = scope.$eval(attr.validateUpvote);
                    var prevValue = $cookies.get(cat.id);
                    var catObject = scope.catList.find(function(catObj) {
                        return catObj.id == cat.id;
                    });
                    
                    if (prevValue) {
                        catObject.votes = parseInt(prevValue, 10);
                        parentCtrl.$setViewValue(prevValue);
                    } else {
                        catObject.votes = parseInt(parentCtrl.$viewValue, 10);
                        $cookies.put(cat.id, parseInt(parentCtrl.$viewValue,10));
                    }
                    facService.setData(scope.catList);
                    parentCtrl.$render();
                }
                parentCtrl.$parsers.push(myValidation);
            }
        }
    }

})();