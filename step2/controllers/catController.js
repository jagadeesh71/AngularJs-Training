(function () {
    angular.module("catClicker").controller("catController", catDetails);

    function catDetails() {
        var vm = this;
        vm.catList = [{
            name: 'American Bobtail',
            description: 'Bobtailed cats, the result of a natural genetic mutation that causes a shortened tail, have appeared in various places over the centuries, from Japan to the Isle of Man',
            src: './images/cat1.png',
            clickCount: 0
        },{
            name: 'Bengal Cats',
            description: 'The Bengal is highly active and highly intelligent. This makes him fun to live with, but he can sometimes be challenging. On the whole, the Bengal is a confident, talkative, friendly cat who is always alert',
            src: './images/cat2.png',
            clickCount: 0
        }];

        vm.incrementCount = function (catReference) {
            catReference.clickCount++;
        };
    }
    
})();