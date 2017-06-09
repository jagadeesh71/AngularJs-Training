(function (){
    angular.module('catClicker').service('catUtilityService', catService);
    
    catService.$inject = ['$http'];
    
    function catService(http) {
        this.getCatList = getCatList;
        this.getCatData = getCatDataById
        this.updateCat = updateCatById;
        this.deleteCat = deleteCatById;
        this.addCat = createCat;
            
        function getCatList(){
            return http.get('/getCatList').then(function(response) {
                return response.data;
            });
        }
        
        function getCatDataById(catId) {
            return http.get('/getCat/'+catId).then(function(response){
                return response.data;
            });
        }
         
        function updateCatById(catData){
            return http.put('/updateCat/'+catData.id, catData).then(function (result){
                return result.data;
            });
        }
        
        function deleteCatById(catId) {
            return http.delete('/deleteCat/'+catId).then(function (result){
                return result.data;
            });
        }
        
        function createCat(catData) {
            return http.post('/createCat', catData);
        }
    }
    
})();