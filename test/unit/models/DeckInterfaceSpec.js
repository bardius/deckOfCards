describe('Interface: DeckInterface', function () {
    var deckObject, testDeckObject;

    beforeEach(function(){
        angular.mock.module('app');

        inject(function (_DeckInterface_, _CardInterface_) {

            var cardObjectArray = [
                new _CardInterface_("red", "Test Card", "T", 1)
            ];

            deckObject = new _DeckInterface_(cardObjectArray);

            testDeckObject = [
                new _CardInterface_("red", "Test Card", "T", 1)
            ];
        });
    });

    describe("DeckInterface", function () {

        it('should contain a card', function () {
            expect(deckObject).toEqual(testDeckObject);
        });

    });

});
