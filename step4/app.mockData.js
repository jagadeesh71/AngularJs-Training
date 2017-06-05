(function (){
    angular.module('catClicker.mockData', ['ngMockE2E']);
    angular.module('catClicker').requires.push('catClicker.mockData');
    
    angular.module('catClicker.mockData').run(run);
    run.$inject = ['$httpBackend', 'myFactoryService'];
    
    function run($httpBackend, crudFactory){
        $httpBackend.whenGET('./views/loginPage.html').passThrough();
        $httpBackend.whenGET('./views/register.html').passThrough();
        $httpBackend.whenGET('./views/catList.html').passThrough();
        $httpBackend.whenGET('./views/createNewCat.html').passThrough();
        $httpBackend.whenGET('./views/form.template.html').passThrough();
        $httpBackend.whenGET('./views/imagePreview.template.html').passThrough();
        $httpBackend.whenGET('./views/catDetails.template.html').passThrough();
        
        $httpBackend.whenGET('./result.json').passThrough();
        
        $httpBackend.whenGET('/getCatList').respond(function (){
            return [200, crudFactory.getCatList(), {}];
        });
        
        $httpBackend.whenGET(/\/getCat\/\d+/).respond(function (method, url){
            return [200, crudFactory.getCat(extractCatIdFromUrl(url)), {}]
        });
        
        $httpBackend.whenPOST('/createCat').respond(function (method, url, data){
           return [200, crudFactory.addCat(JSON.parse(data)), {}];
        });
        
        $httpBackend.whenPUT(/\/updateCat\/\d+/).respond(function (method, url, data){
            return [200, crudFactory.updateCat(JSON.parse(data)), {}];
        });
        
        $httpBackend.whenDELETE(/\/deleteCat\/\d+/).respond(function (method, url, data){
            return [200, crudFactory.deleteCat(extractCatIdFromUrl(url)), {}];
        });
        
        $httpBackend.whenPOST('/validateUser').respond(function (method, url, data){
            return [200, crudFactory.validateCredentials(JSON.parse(data)), {}];
        });
        
        function extractCatIdFromUrl(url) {
            var regex = /(\d+)/;
            var match = regex.exec(url);
            return (match !== null) ? parseInt(match[1]) : null;
        }
    }
})();