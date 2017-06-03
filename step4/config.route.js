(function() {
    angular.module('catClicker').config(configuration);
            
    function configuration($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');
        
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
        })
        
        .state('login', {
            url: '/login',
            templateUrl: './views/loginPage.html',
            controller: 'loginController',
            controllerAs: 'loginCtrl'
        })
        
        .state('register', {
           url: '/register',
           templateUrl: './views/register.html',
           controller: 'registerController',
           controllerAs: 'regCtrl'
        })
    }
})();