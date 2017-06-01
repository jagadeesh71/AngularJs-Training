(function() {
    angular.module('catClicker').config(configuration);
            
    function configuration($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/catList');
        
        $stateProvider
        
        .state('catList', {
            url: '/catList',
            templateUrl: './views/catList.html',
            controller: 'catController',
            controllerAs: 'catCtrl'
        })
        
        .state('newCat', {
            url: '/newCat',
            templateUrl: './views/createNewCat.html',
            controller: 'createCatController',
            controllerAs: 'createCtrl'
        });
    }
})();