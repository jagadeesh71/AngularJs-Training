(function (){
    angular.module('catClicker').service('loginService', loginService);
	
	loginService.$inject = ['$http'];
    
    function loginService(http) {
		this.validateUser = validateUser;
		
		function validateUser(userData){
            return http.post('/validateUser', userData);
        }
	}
})();