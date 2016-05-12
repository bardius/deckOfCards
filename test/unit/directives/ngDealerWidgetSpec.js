describe('Directive: Dealer widget directive', function () {
    var rootScope, scope, element, template;

    beforeEach(function(){
        angular.mock.module('app', 'views/templates/dealer-widget.tpl.html');

        inject(function (_$rootScope_, _$compile_, _$templateCache_) {
            rootScope = _$rootScope_;
            scope = _$rootScope_.$new();

            template = _$templateCache_.get('views/templates/dealer-widget.tpl.html');
            _$templateCache_.put('views/templates/dealer-widget.tpl.html', this.template);

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

            element = _$compile_('<div ng-dealer-widget cardscount="cardscount" deck="deck" draw="draw"></div>')(scope);

            scope.$digest();

            spyOn(_$rootScope_, '$broadcast').and.callThrough();
        });
    });

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

    it("broadcasts the resetTable event", function(){
        element.find('button').eq(0).triggerHandler('click');
        scope.$digest();

        expect(rootScope.$broadcast).toHaveBeenCalledWith("resetTable");
    });

    it("broadcasts the shuffleDeck event", function(){
        element.find('button').eq(1).triggerHandler('click');
        scope.$digest();

        expect(rootScope.$broadcast).toHaveBeenCalledWith("shuffleDeck");
    });

    it("broadcasts the drawHand event", function(){
        element.find('button').eq(2).triggerHandler('click');
        scope.$digest();

        expect(rootScope.$broadcast).toHaveBeenCalledWith("drawHand");
    });

    it("broadcasts the sortDraw event", function(){
        element.find('button').eq(3).triggerHandler('click');
        scope.$digest();

        expect(rootScope.$broadcast).toHaveBeenCalledWith("sortDraw");
    });

});
