(function() {
    angular.module('catClicker').controller('createCatController', createCat);
    createCat.$inject = ['myFactoryService','$scope', '$window', '$state'];
    function createCat(factoryServ, scope, $window, $state) {
        var vm = this,
            idTracker;
        vm.isDuplicate = false;
        
        factoryServ.getCatList().then(function (result) {
            vm.catsList = result;
        });
        
        vm.initializeCatObject = function() {
            vm.catObj = {
                name: '',
                description: '',
                src: ''
            };
        }
        
        vm.initializeCatObject();
                
        vm.saveCatDetails = function(data) {
            idTracker = vm.catsList[vm.catsList.length - 1].id;
            data.votes = 0;
            data.clickCount = 0;
            data.id = idTracker + 1;
            idTracker++;
            data.isClicked = false;
            vm.catsList.push(data);
            factoryServ.setData(vm.catsList);
            
            $window.location.href = '#/';
        }
        
        
        vm.duplicateNameExists = function (data) {
            var result;
            result = vm.catsList.filter(function (cat) {
                return cat.name.toLowerCase() === data.name && data.name.toLowerCase();
            });
            vm.isDuplicate = (result.length !== 0);
        }
        
        vm.cancel = function (data) {
            $state.go('catList');
        }
    }
})();