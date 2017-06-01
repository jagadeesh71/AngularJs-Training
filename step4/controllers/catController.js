(function () {
    angular.module('catClicker').controller('catController', catController);
    catController.$inject = ['myFactoryService', '$scope', '$cookies'];
    
    function catController(facService, scope, $cookies) {
        var vm = this;
        vm.editflag = false;
        vm.isDuplicate = false;
        
        var loadCatsData = function () {
            facService.getCatList().then(function (result) {
                vm.catList = result;
                vm.getCatDetails(vm.catList[0]);
            });
        };
        
        loadCatsData();
        
        vm.getCatDetails = function (catData) {
            vm.catData = [];
            vm.catData = vm.catList.filter(function (cat) {
                return cat.id === catData.id ;
            })[0];
            vm.catData.isClicked = true;
            vm.selectedCat = vm.catData.id;
            vm.editflag = false;
        }
        
        vm.incrementCount = function (catReference) {
            catReference.clickCount++;
        }
                
        vm.loadCatDetails = function (data) {
            vm.catObj = {
                name: data.name,
                description: data.description,
                src: data.src,
                id: data.id,
                votes: data.votes,
                clickCount: data.clickCount,
                isClicked: data.isClicked,
            };
            vm.selectedCat = data.id;
            vm.editflag = true;
        }
        
        vm.duplicateNameExists = function (data) {
            var result;
            result = vm.catList.filter(function (cat) {
                return data.name && cat.name.toLowerCase() === data.name.toLowerCase() && cat.id != data.id;
            });
            vm.isDuplicate = (result.length !== 0);
        }
        
        vm.updateCatDetails = function(data) {
            vm.catList.forEach( function(cat) {
                if (cat.id == data.id) {
                    cat.name = data.name;
                    cat.description = data.description;
                    cat.src = data.src;
                }
            });
            facService.setData(vm.catList);
            vm.getCatDetails(data);
        }
        
        vm.deleteCat = function(catData) {
            var index = vm.catList.findIndex(function (cat) {
                return cat.id === catData.id;
            });
            vm.catList.splice(index,1);
            facService.setData(vm.catList);
            if (vm.catList.length) {
               vm.getCatDetails(vm.catList[0]); 
            }
        }
        
        vm.cancel = function (data) {
            vm.editflag = false;
            vm.getCatDetails(data);
        }
    }
    
})();