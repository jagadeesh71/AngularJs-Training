(function () {
    angular.module('catClicker', ['ngCookies', 'ui.router', 'ngMessages', 'LocalStorageModule']);
    
    angular.module('catClicker').run(runMethod);
    runMethod.$inject = ['$rootScope', '$state', '$cookies'];
    
    function runMethod($rootScope, state, cookies) {
        $rootScope.$on('$stateChangeStart', function(event, toState) {
           if(!cookies.get('user') && toState.name !== 'login') {
               state.go('login');
               event.preventDefault();
           }
        });
    }
})();