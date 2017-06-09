(function() {
    angular.module('catClicker').controller('loginController', loginController);
    
    loginController.$inject = ['loginService', '$cookies', '$state']
    function loginController(loginService, $cookies, $state){
        var self = this;
		self.error;
        
        self.login = function(userData) {
            loginService.validateUser(userData).then(function (response){
                if (response.data) {
                    $cookies.put('user', JSON.stringify(response.data));
                    $state.go('catList');
                } else {
					self.error = 'Username or password is invalid';
				}
            });
        }
    }
})();