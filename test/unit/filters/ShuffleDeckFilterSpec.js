describe('Filter: ShuffleDeckFilter', function () {
    var filters, originalDeck, shuffledDeck;

    beforeEach(function(){
        angular.mock.module('app');

        inject(function (_$filter_, _DeckDataService_) {
            filters = _$filter_;

            originalDeck = _DeckDataService_.getDeck();
        });
    });

    describe("ShuffleDeckFilter", function () {

        it('should change the order of objects within a json array', function () {
            shuffledDeck = filters('ShuffleDeckFilter')(originalDeck.slice(0));

            expect(shuffledDeck.length).toEqual(originalDeck.length);
            expect(shuffledDeck).not.toEqual(originalDeck);
        });

    });
});
