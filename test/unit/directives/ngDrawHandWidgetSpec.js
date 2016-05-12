describe('Directive: Draw Hand widget directive', function () {
    var rootScope, scope, element, template;

    beforeEach(function(){
        angular.mock.module('app', 'views/templates/draw-hand-widget.tpl.html');

        inject(function (_$rootScope_, _$compile_, _$templateCache_) {
            rootScope = _$rootScope_;
            scope = _$rootScope_.$new();

            template = _$templateCache_.get('views/templates/draw-hand-widget.tpl.html');
            _$templateCache_.put('views/templates/draw-hand-widget.tpl.html', this.template);

            var sample_card_1 = {
                color: "red",
                name: "Test Card 1",
                suit: "T",
                cardvalue: 1
            };

            var sample_card_2 = {
                color: "red",
                name: "Test Card 2",
                suit: "T",
                cardvalue: 2
            };

            scope.draw = [
                sample_card_1,
                sample_card_2
            ];

            element = _$compile_('<div ng-draw-hand-widget draw=draw></div>')(scope);

            scope.$digest();
        });
    });

    it('should have correct heading', function () {
        expect(element.find('h3').text()).toContain('Drawn Cards');
    });

    it('should have the correct count of cards', function () {
        expect(scope.draw.length).toBe(2);
    });

});
