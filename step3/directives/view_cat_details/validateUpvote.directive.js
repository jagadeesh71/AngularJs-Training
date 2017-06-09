(function () {

    validateUpvote.$inject = ['$cookies', 'backEndLogicFactory'];

    angular.module('catClicker').directive('validateUpvote', validateUpvote);

    function validateUpvote($cookies, facService) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, parentCtrl) {
                function myValidation() {
                    var catId = scope.$eval(attr.validateUpvote);
                    var prevValue = $cookies.get(catId);
                    var catObject = scope.catList.find(function(catObj) {
                        return catObj.id == catId;
                    });
                    
                    if (prevValue) {
                        catObject.votes = parseInt(prevValue, 10);
                        parentCtrl.$setViewValue(prevValue);
                    } else {
                        catObject.votes = parseInt(parentCtrl.$viewValue, 10);
                        $cookies.put(catId, parseInt(parentCtrl.$viewValue,10));
                    }
                    facService.setData(catObject);
                    parentCtrl.$render();
                }
                parentCtrl.$parsers.push(myValidation);
            }
        }
    }

})();