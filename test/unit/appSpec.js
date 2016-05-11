describe('Deck of Cards Application', function () {

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope) {
        rootScope = $rootScope;
        scope = $rootScope.$new();

        MainController = $controller('MainController', {
            $scope: scope
        });

    }));

    it('should have a main controller', function () {
        expect(MainController).toBeTruthy();
    });
});
