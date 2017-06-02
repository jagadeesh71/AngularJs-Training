(function () {
    angular.module('catClicker').factory('imageUrlCheckService', imageUrlCheckService);
    imageUrlCheckService.$inject = ['$q'];
    
    function imageUrlCheckService(q) {
        
        function isValidUrl(imgSrc) {
            var defer = q.defer();
            var img = new Image();
            img.src = imgSrc;
            img.onload = function() {
                defer.resolve(true);
            };
            img.onerror = function() { 
                defer.resolve(false);
             };
            return defer.promise;
        }
        
        return {
            isValidUrl: isValidUrl
        }
    }
})();