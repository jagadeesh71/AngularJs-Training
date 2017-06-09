(function () {
    angular.module('catClicker').controller('catController', catController);
    catController.$inject = ['catUtilityService','$cookies', '$state'];
    
    function catController(catUtilityService, cookies, $state) {
        var vm = this;
        vm.editflag = false;
        
        vm.userData = JSON.parse(cookies.get('user'));
        
        catUtilityService.getCatList().then(function (result) {
            vm.catList = result;
            vm.getCatDetails(vm.catList[0].id);
        });
        
        vm.getCatDetails = function (catId) {
            catUtilityService.getCatData(catId).then(function(response){
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
                
        vm.updateCatDetails = function(catData) {
            catUtilityService.updateCat(catData).then(function (updatedList){
                vm.catList = updatedList;
            });
        }
        
        vm.deleteCat = function(catId) {
            catUtilityService.deleteCat(catId).then(function(response){
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
		
		vm.logout = function () {
			cookies.remove('user');
			$state.go('login');
		}
    }
    
})();