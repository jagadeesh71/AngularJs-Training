(function () {
    angular.module('catClicker').controller('catController', catController);
    catController.$inject = ['catService','$cookies'];
    
    function catController(catService, cookies) {
        var vm = this;
        vm.editflag = false;
        vm.isDuplicate = false;
        
        vm.userData = JSON.parse(cookies.get('user'));
        
        catService.getCatList().then(function (result) {
            vm.catList = result;
            vm.getCatDetails(vm.catList[0].id);
        });
        
        vm.getCatDetails = function (catId) {
            catService.getCatData(catId).then(function(response){
				vm.catData = response;
				vm.catData.isClicked = true;
				vm.selectedCat = vm.catData.id;
				vm.editflag = false;
			});
        }
        
        vm.incrementCount = function (catReference) {
            catReference.clickCount++;
            vm.updateCatDetails(catReference);
        }
                
        vm.loadCatDetails = function (data) {
            vm.catObj = angular.copy(data);
            vm.selectedCat = data.id;
            vm.editflag = true;
        }
        
        vm.duplicateNameCheck = function (data) {
            var result = vm.catList.filter(function (cat) {
                return data.name && cat.name.toLowerCase() === data.name.toLowerCase() && cat.id != data.id;
            });
            vm.isDuplicate = (result.length !== 0);
        }
        
        vm.updateCatDetails = function(catData) {
            catService.updateCat(catData).then(function (updatedList){
                vm.catList = updatedList;
                vm.getCatDetails(catData.id);
            });
        }
        
        vm.deleteCat = function(catId) {
            catService.deleteCat(catId).then(function(response){
                vm.catList = response;
                if (vm.catList.length) {
                    vm.getCatDetails(vm.catList[0].id); 
                }
            });
        }
        
        vm.cancel = function (catId) {
            vm.editflag = false;
            vm.getCatDetails(catId);
        }
    }
    
})();