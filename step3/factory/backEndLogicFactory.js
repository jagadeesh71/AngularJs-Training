(function () {
    angular.module('catClicker').factory('backEndLogicFactory', backEndLogicFactory);
    backEndLogicFactory.$inject = ['$http', 'localStorageService'];
    
    function backEndLogicFactory(http, localStorage) {

        var listOfCats = [],
            usersList = [];
        
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
        
        function validateCredentials(userData) {
            usersList = localStorage.get('users');
			if(usersList) {
            	return usersList.filter(function(user) {
					return user.userName === userData.userName && user.password === userData.password;
				})[0];
			}
        }
        
        return {
            addCat : addCat,
            getCat : getCatData,
            deleteCat : deleteCat,
            updateCat : updateCatDetails,
            getCatList: getCatList,
            setData: updateCatDetails,
            validateCredentials: validateCredentials,
            init: setData()
        }
    }
    
})();