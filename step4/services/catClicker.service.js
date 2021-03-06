(function (){
    angular.module('catClicker').service('catService', catService);
    
    catService.$inject = ['$q', '$http'];
    
    function catService(q, http) {
        this.getCatList = getCatList;
        this.getCatData = getCatDataById
        this.updateCat = updateCatById;
        this.deleteCat = deleteCatById;
        this.addCat = createCat;
        this.validateUser = validateUser;
            
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
        
        function validateUser(userData){
            return http.post('/validateUser', userData);
        }
    }
    
})();