describe('Interface: CardInterface', function () {
    var cardObject;
    var testCardObject;

    // load the service's module
    beforeEach(module('app'));

    beforeEach(inject(function (CardInterface) {

        cardObject = CardInterface.setCard("Test Card", "T", 1);

        testCardObject = {
            name: "Test Card",
            suit: "T",
            cardvalue: 1
        };

    }));

    describe("CardInterface", function () {
        it('should create a card', function () {
            expect(cardObject).toEqual(testCardObject);
        });
    });

});