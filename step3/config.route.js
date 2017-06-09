(function() {
    angular.module('catClicker').config(configuration);
            
    function configuration($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');
        
        $stateProvider
        
        .state('catList', {
            url: '/catList',
            templateUrl: './modules/catList/catList.html',
            controller: 'catController',
            controllerAs: 'catCtrl'
        })
        
        .state('newCat', {
            url: '/newCat',
            templateUrl: './modules/addCat/createNewCat.html',
            controller: 'createCatController',
            controllerAs: 'createCtrl'
        })
        
        .state('login', {
            url: '/login',
            templateUrl: './modules/login/loginPage.html',
            controller: 'loginController',
            controllerAs: 'loginCtrl'
        })
        
        .state('register', {
           url: '/register',
           templateUrl: './modules/registration/register.html',
           controller: 'registerController',
           controllerAs: 'regCtrl'
        })
    }
})();