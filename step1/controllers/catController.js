(function () {
    angular.module("catClicker").controller("catController", catDetails);

    function catDetails() {
        var vm = this;
        vm.catObject = {
            name: 'American Bobtail',
            description: 'Bobtailed cats, the result of a natural genetic mutation that causes a shortened tail, have appeared in various places over the centuries, from Japan to the Isle of Man',
            clickCount: 0
        }

        vm.incrementCount = function () {
            vm.catObject.clickCount++;
        }
    }
    
})();