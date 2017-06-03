(function() {
    angular.module('catClicker').controller('createCatController', createCat);
    createCat.$inject = ['$state', 'catService'];
    function createCat($state, catService) {
        var vm = this;
        vm.isDuplicate = false;
        
        catService.getCatList().then(function (result) {
            vm.catsList = result;
        });
        
        vm.catObj = {
            name: '',
            description: '',
            src: '',
            votes: 0,
            clickCount: 0,
            isClicked: false
        };
        
        vm.saveCatDetails = function(data) {
            data['id'] = new Date().getUTCMilliseconds();
            catService.addCat(data).then(function (){
                $state.go('catList');
            });
        }
        
        vm.duplicateNameCheck = function (data) {
            var result = vm.catsList.filter(function (cat) {
                return cat.name.toLowerCase() === data.name && data.name.toLowerCase();
            });
            vm.isDuplicate = (result.length !== 0);
        }
        
        vm.cancel = function (data) {
            $state.go('catList');
        }
    }
})();