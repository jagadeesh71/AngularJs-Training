(function () {
    angular.module('catClicker').factory('myFactoryService', myFactoryService);
    
    myFactoryService.$inject = ['$q','$http'];
    function myFactoryService(q, http) {
        
        var listOfCats = [];
        
        function setData (catList) {
            listOfCats = angular.copy(catList);
        }
        
        function getData () {
            var defer = q.defer();
            defer.resolve(listOfCats);
            return defer.promise;
        }
        
        function getCatList() {
            var defer = q.defer();
            if(!listOfCats.length) {
                http.get('./result.json').success(function (result) {
                    setData(result.data);
                    defer.resolve(listOfCats);
                });
            } else {
                defer.resolve(listOfCats);
            }
            return defer.promise;
        }
        
        getCatList();
        
        return {
            setData: setData,
            getData: getData,
            getCatList: getCatList
        };
    }
    
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