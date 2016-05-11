describe('Directive: Deck widget directive', function () {
    var scope, element, template;

    beforeEach(module('app', 'views/templates/deck-widget.tpl.html'));

    beforeEach(inject(function ($rootScope, $compile, $templateCache, $filter) {

        scope = $rootScope.$new();

        template = $templateCache.get('views/templates/deck-widget.tpl.html');
        $templateCache.put('views/templates/deck-widget.tpl.html', this.template);

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

        scope.deck = [
            sample_card_1,
            sample_card_2
        ];

        element = $compile('<div ng-deck-widget deck="deck"></div>')(scope);

        scope.$digest();
    }));

    it('should have correct heading', function () {
        expect(element.find('h3').text()).toContain('Deck');
    });

    it('should have the correct count of cards', function () {
        expect(scope.deck.length).toBe(2);
    });

});
