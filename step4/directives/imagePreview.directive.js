(function () {
    angular.module('catClicker').directive('imagePreview', imagePreview);
    
    function imagePreview() {
        return {
            restrict: 'E',
            scope: {
                catSrc: '=catSrc',
                catObj: '=catObj'
            },
            templateUrl: './views/imagePreview.template.html',
        }
    };
})();