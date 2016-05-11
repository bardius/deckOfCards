describe('Controller: Main controller', function () {
    var scope, rootScope;

    beforeEach(function(){
        angular.mock.module('app');

        inject(function (_$controller_, _$rootScope_) {
            rootScope = _$rootScope_;
            scope = _$rootScope_.$new();

            _$controller_('MainController', {
                $scope: scope
            });
        });
    });

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
