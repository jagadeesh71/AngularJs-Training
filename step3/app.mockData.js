(function (){
    angular.module('catClicker.mockData', ['ngMockE2E']);
    angular.module('catClicker').requires.push('catClicker.mockData');
    
    angular.module('catClicker.mockData').run(run);
    run.$inject = ['$httpBackend', 'backEndLogicFactory'];
    
    function run($httpBackend, backEndFactory){
        $httpBackend.whenGET('./modules/login/loginPage.html').passThrough();
        $httpBackend.whenGET('./modules/registration/register.html').passThrough();
        $httpBackend.whenGET('./modules/catList/catList.html').passThrough();
        $httpBackend.whenGET('./modules/addCat/createNewCat.html').passThrough();
        $httpBackend.whenGET('./directives/form/form.template.html').passThrough();
        $httpBackend.whenGET('./directives/image_preview/imagePreview.template.html').passThrough();
        $httpBackend.whenGET('./directives/view_cat_details/catDetails.template.html').passThrough();
        
        $httpBackend.whenGET('./result.json').passThrough();
        
        $httpBackend.whenGET('/getCatList').respond(function (){
            return [200, backEndFactory.getCatList(), {}];
        });
        
        $httpBackend.whenGET(/\/getCat\/\d+/).respond(function (method, url){
            return [200, backEndFactory.getCat(extractCatIdFromUrl(url)), {}]
        });
        
        $httpBackend.whenPOST('/createCat').respond(function (method, url, data){
           return [200, backEndFactory.addCat(JSON.parse(data)), {}];
        });
        
        $httpBackend.whenPUT(/\/updateCat\/\d+/).respond(function (method, url, data){
            return [200, backEndFactory.updateCat(JSON.parse(data)), {}];
        });
        
        $httpBackend.whenDELETE(/\/deleteCat\/\d+/).respond(function (method, url, data){
            return [200, backEndFactory.deleteCat(extractCatIdFromUrl(url)), {}];
        });
        
        $httpBackend.whenPOST('/validateUser').respond(function (method, url, data){
            return [200, backEndFactory.validateCredentials(JSON.parse(data)), {}];
        });
        
        function extractCatIdFromUrl(url) {
            var regex = /(\d+)/;
            var match = regex.exec(url);
            return (match !== null) ? parseInt(match[1]) : null;
        }
    }
})();