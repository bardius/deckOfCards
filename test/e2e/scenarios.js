describe('app', function () {
    browser.get('/');

    it("should load the home page with correct title", function () {
        expect(browser.getTitle()).toBe('George Bardis | Deck of Cards');
    });

    it( 'should load angular', function() {
        browser.waitForAngular();
    });

    it("should have a full deck", function () {
        var deckContainer  = element(by.css('#deckContainer p'));

        expect(deckContainer.getText()).toContain("104");
    });

    it("should have no cards drawn", function () {
        var drawContainerDrawCards  = element.all(by.css('#drawContainer .deck .deck-card'));

        expect(drawContainerDrawCards.count()).toEqual(0);
    });

    it("should be able to shuffle deck", function () {
        var shuffleBtn = element(by.css('#shuffleDeckBtn'));
        var notificationContainer = element(by.css('#notificationContainer p'));

        shuffleBtn.click();

        expect(notificationContainer.getText()).toContain("Deck is shuffled");
    });

    it("should be able to draw 1 card", function () {
        var drawHandBtn = element(by.css('#drawHandBtn'));

        drawHandBtn.click();

        var drawContainerDrawCards  = element.all(by.css('#drawContainer .deck .deck-card'));

        expect(drawContainerDrawCards.count()).toEqual(1);
    });

    it("should be able to reset table", function () {
        var resetTableBtn = element(by.css('#resetTableBtn'));
        var notificationContainer = element(by.css('#notificationContainer p'));

        resetTableBtn.click();

        expect(notificationContainer.getText()).toContain("Table is reset");
    });

    it("should be able to draw all cards from deck", function () {
        var drawHandBtn = element(by.css('#drawHandBtn'));
        var newHandTotalCardsInput = element(by.css('#newHandTotalCards'));

        newHandTotalCardsInput.click();
        newHandTotalCardsInput.clear();
        newHandTotalCardsInput.sendKeys("104");

        drawHandBtn.click();

        var drawContainerDrawCards  = element.all(by.css('#drawContainer .deck .deck-card'));

        expect(drawContainerDrawCards.count()).toEqual(104);
    });

    it("should be able to sort drawn cards", function () {
        var sortDrawBtn = element(by.css('#sortDrawBtn'));
        var notificationContainer = element(by.css('#notificationContainer p'));

        sortDrawBtn.click();

        expect(notificationContainer.getText()).toContain("cards where sorted");
    });

});
