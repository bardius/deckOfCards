describe('Filter: SortCardsFilter', function () {
    var filters, originalDraw, sortedDraw, sortedDeckFirstCard, sortedDeckLastCard;

    beforeEach(function(){
        angular.mock.module('app');

        inject(function (_$filter_, _DeckDataService_, _CardInterface_) {
            filters = _$filter_;

            originalDeck = _DeckDataService_.getDeck();
            sortedDeckFirstCard = new _CardInterface_('black', 'clubs 2', 'C', 2);
            sortedDeckLastCard = new _CardInterface_('red', 'diamonds Ace', 'D', 14);
            originalDraw = [];

            var totalCardsToDraw = 104;

            for(totalCardsToDraw; totalCardsToDraw > 0; totalCardsToDraw -= 1){
                originalDraw.push(originalDeck.shift());
            }

        });
    });

    describe("SortCardsFilter", function () {

        it('should sort objects within a json array with the deck of cards order logic', function () {
            sortedDraw = filters('SortCardsFilter')(originalDraw.slice(0));

            expect(sortedDraw.length).toEqual(originalDraw.length);
            expect(sortedDraw).not.toEqual(originalDraw);
        });

        it('should get Black Clubs 2 as the first card of a sorted deck', function () {
            sortedDraw = filters('SortCardsFilter')(originalDraw.slice(0));

            expect(sortedDraw[0]).toEqual(sortedDeckFirstCard);
        });

        it('should get Red Diamonds Ace as the last card of a sorted deck', function () {
            sortedDraw = filters('SortCardsFilter')(originalDraw.slice(0));

            expect(sortedDraw[0]).toEqual(sortedDeckFirstCard);
        });

    });
});

