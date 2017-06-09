(function() {
    angular.module('catClicker').controller('createCatController', createCat);
    createCat.$inject = ['$state', 'catUtilityService'];
    function createCat($state, catUtilityService) {
        var vm = this;
        
        catUtilityService.getCatList().then(function (result) {
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
            catUtilityService.addCat(data).then(function (){
                $state.go('catList');
            });
        }
                
        vm.cancel = function (data) {
            $state.go('catList');
        }
    }
})();