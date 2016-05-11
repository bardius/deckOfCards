describe('Directive: Dealer widget directive', function () {
    var scope, element, template;

    beforeEach(module('app', 'views/templates/dealer-widget.tpl.html'));

    beforeEach(inject(function ($rootScope, $compile, $templateCache, $filter) {

        scope = $rootScope.$new();

        template = $templateCache.get('views/templates/dealer-widget.tpl.html');
        $templateCache.put('views/templates/dealer-widget.tpl.html', template);

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

        scope.draw = [
            sample_card_1,
            sample_card_2
        ];

        scope.cardscount = 2;

        element = $compile('<div ng-dealer-widget cardscount="cardscount" deck="deck" draw="draw"></div>')(scope);

        scope.$digest();
    }));

    it('should have correct heading', function () {
        expect(element.find('h3').text()).toContain('Deck/Deal Controls');
    });

    it('should have the correct count of cards', function () {
        expect(scope.draw.length).toBe(2);
    });

    it('should have the correct count of drawn cards', function () {
        expect(scope.deck.length).toBe(2);
    });

    it('should have the draw cards count', function () {
        expect(scope.cardscount).toBe(2);
    });

});
