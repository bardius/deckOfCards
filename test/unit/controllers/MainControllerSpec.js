describe('Controller: Main controller', function () {
    var scope, MainController, location, route, rootScope;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope) {
        rootScope = $rootScope;
        scope = $rootScope.$new();

        MainController = $controller('MainController', {
            $scope: scope
        });

    }));

    it('should have the correct deck payload length', function () {
        expect(scope.deck.length).toBe(104);
    });

    it('should have initial cardscount set', function () {
        expect(scope.cardscount).toBe(1);
    });

    it('should not have a draw', function () {
        expect(scope.draw).toBeNull();
    });
});
