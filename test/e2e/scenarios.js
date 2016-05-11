describe('app', function () {
    browser.get('/');

    it("should load", function () {
        expect(browser.getTitle()).toBe('George Bardis | Deck of Cards');
    });

});
