describe('Directive: Draw Hand widget directive', function () {
    var scope, element, template;

    beforeEach(module('app', 'views/templates/draw-hand-widget.tpl.html'));

    beforeEach(inject(function ($rootScope, $compile, $templateCache, $filter) {

        scope = $rootScope.$new();

        template = $templateCache.get('views/templates/draw-hand-widget.tpl.html');
        $templateCache.put('views/templates/draw-hand-widget.tpl.html', template);

        var sample_card_1 = {
            "name": "test card 1",
            "symbol": "test symbol",
            "cardvalue": 1
        };

        var sample_card_2 = {
            "name": "test card 2",
            "symbol": "test symbol",
            "cardvalue": 2
        };

        scope.draw = [
            sample_card_1,
            sample_card_2
        ];

        element = $compile('<div ng-draw-hand-widget draw=draw></div>')(scope);

        scope.$digest();
    }));

    it('should have correct heading', function () {
        expect(element.find('h3').text()).toContain('Drawn Cards');
    });

    it('should have the correct count of cards', function () {
        expect(scope.draw.length).toBe(2);
    });

});
