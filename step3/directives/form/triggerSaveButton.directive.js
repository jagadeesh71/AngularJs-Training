(function () {
    angular.module('catClicker').directive('triggerClick', triggerClick);
    function triggerClick () {
        return function (scope, element) {
            element.bind("keyup", function (event) {
                if(event.keyCode === 13) {
                    document.getElementById('saveButton').click();
                }
            });
        };
    }
})();