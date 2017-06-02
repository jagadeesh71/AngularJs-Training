(function () {
    angular.module('catClicker').factory('myFactoryService', myFactoryService);
    myFactoryService.$inject = ['$q', '$http'];
    
    function myFactoryService(q, http) {

        var listOfCats = [];
        
        return {
            addCat : addCat,
            getCat : getCatData,
            deleteCat : deleteCat,
            updateCat : updateCatDetails,
            getCatList: getCatList,
            setData: updateCatDetails,
            init: setData()
        }
                
        function getCatList() {
            return listOfCats;
        }
        
        function addCat(catData) {
            listOfCats.push(catData);
        }
        
        function getCatData(catId) {
            return listOfCats.filter(function (cat) {
                return cat.id === catId ;
            })[0];
        }
        
        function deleteCat(catId) {
            var index = listOfCats.findIndex(function (cat) {
                return cat.id === catId;
            });
            listOfCats.splice(index, 1);
            return listOfCats;
        }
        
        function updateCatDetails(catData) {
            listOfCats.forEach( function(cat) {
                if (cat.id == catData.id) {
                    cat.name = catData.name;
                    cat.description = catData.description;
                    cat.src = catData.src;
                    cat.votes = catData.votes;
                    cat.clickCount = catData.clickCount; 
                }
            });
            return listOfCats;
        }
                
        function setData(catData) {
            if(!listOfCats.length) {
                http.get('./result.json').then(function(response) {
                    listOfCats = response.data.data;
                });
            }
        }
    }
    
})();