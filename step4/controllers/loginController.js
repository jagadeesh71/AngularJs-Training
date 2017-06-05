(function() {
    angular.module('catClicker').controller('loginController', loginController);
    
    loginController.$inject = ['catService', '$cookies', '$state']
    function loginController(catService, $cookies, $state){
        var self = this;
        
        self.login = function(userData){
            catService.validateUser(userData).then(function (response){
                if (response.data) {
                    $cookies.put('user', JSON.stringify(response.data));
                    $state.go('catList');
                }
            });
        }
    }
})();