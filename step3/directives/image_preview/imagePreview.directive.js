(function () {
    angular.module('catClicker').directive('imagePreview', imagePreview);
    
    function imagePreview() {
        return {
            restrict: 'E',
            scope: {
                catSrc: '=catSrc',
                catObj: '=catObj'
            },
            templateUrl: './directives/image_preview/imagePreview.template.html',
        }
    };
})();