(function() {
    angular.module('catClicker').controller('registerController', registerController);
    registerController.$inject = ['localStorageService', '$state'];
    
    function registerController(localStorage, $state){
        var _this = this,
            arrOfUsers = [],
            KEY = 'users';
        
        setLocalStorage();
		
        _this.USERNAMEREGEX = '^[a-zA-Z0-9]*$';
        _this.PASSWORDREGEX = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).[a-zA-Z0-9]+$';
        _this.EMAILREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
		function setLocalStorage() {
			if (!localStorage.get(KEY)) {
				localStorage.set(KEY, arrOfUsers);
			} else {
				arrOfUsers = localStorage.get(KEY);
			}
		};
		
        _this.createUser = function(userData) {
			arrOfUsers.push(userData);
			localStorage.set(KEY, arrOfUsers);
            $state.go('login');
        }
    }
})();