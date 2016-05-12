describe('Interface: CardInterface', function () {
    var cardObject, testCardObject;

    beforeEach(function(){
        angular.mock.module('app');

        inject(function (_CardInterface_) {

            cardObject = new _CardInterface_("red", "Test Card", "T", 1);

            testCardObject = {
                color: "red",
                name: "Test Card",
                suit: "T",
                cardvalue: 1
            };
        });
    });

    describe("CardInterface", function () {

        it('should create a card', function () {
            expect(cardObject.color).toEqual(testCardObject.color);
        });

    });

});
