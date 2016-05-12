describe('Controller: Main controller', function () {
    var scope, rootScope, controller;

    beforeEach(function(){
        angular.mock.module('app');

        inject(function (_$controller_, _$rootScope_, _DeckDataService_) {
            rootScope = _$rootScope_;
            scope = _$rootScope_.$new();

            controller = _$controller_('MainController', {
                $scope: scope
            });

            spyOn(_$rootScope_, '$on').and.callThrough();
        });
    });

    it('should have the correct deck payload length', function () {
        expect(scope.deck.length).toBe(104);
    });

    it('should have initial draw cards count set', function () {
        expect(scope.cardscount).toBe(1);
    });

    it('should not have a draw', function () {
        expect(scope.draw).toBeNull();
    });

    it('should be subscribed to the resetTable event', function () {
        rootScope.$broadcast('resetTable');

        expect(scope.notification).toContain('Table is reset');
    });

    it('should be subscribed to the shuffleDeck event', function () {
        rootScope.$broadcast('shuffleDeck');

        expect(scope.notification).toContain('Deck is shuffled');
    });

    it('should be subscribed to the drawHand event', function () {
        rootScope.$broadcast('drawHand');

        expect(scope.notification).toContain('cards where drawn');
    });

    it('should be subscribed to the sortDraw event', function () {
        rootScope.$broadcast('sortDraw');

        expect(scope.notification).toContain('cards where sorted');
    });

});
