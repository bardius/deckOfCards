describe('Deck of Cards Application', function () {
    var scope, rootScope, controller;

    beforeEach(function(){
        angular.mock.module('app');

        inject(function (_$controller_, _$rootScope_) {
            rootScope = _$rootScope_;
            scope = _$rootScope_.$new();

            controller = _$controller_('MainController', {
                $scope: scope
            });
        });
    });

    it('should have a main controller', function () {
        expect(controller).toBeTruthy();
    });
});
