describe('Interface: DeckInterface', function () {
    var deckObject;
    var testDeckObject;

    // load the service's module
    beforeEach(module('app'));

    beforeEach(inject(function (DeckInterface, CardInterface) {

        var cardObjectArray = [
            CardInterface.setCard("Test Card", "T", 1)
        ];

        deckObject = DeckInterface.setDeck(cardObjectArray);

        testDeckObject = [{
            name: "Test Card",
            suit: "T",
            cardvalue: 1
        }];

    }));

    describe("DeckInterface", function () {
        it('should contain a card', function () {
            expect(deckObject).toEqual(testDeckObject);
        });
    });

});
