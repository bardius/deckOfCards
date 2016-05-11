angular.module('templates-app', ['views/home.tpl.html', 'views/sample.tpl.html', 'views/templates/dealer-widget.tpl.html', 'views/templates/deck-widget.tpl.html', 'views/templates/draw-hand-widget.tpl.html', 'views/templates/notification-widget.tpl.html']);

angular.module("views/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/home.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"columns large-12\">\n" +
    "        <div ng-notification-widget notification=\"notification\"></div>\n" +
    "        <div ng-deck-widget deck=\"deck\"></div>\n" +
    "        <div ng-dealer-widget cardscount=\"cardscount\" deck=\"deck\" draw=\"draw\"></div>\n" +
    "        <div ng-draw-hand-widget draw=\"draw\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/sample.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/sample.tpl.html",
    "<div class=\"panel\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"columns large-12\">\n" +
    "            <h3>Sample second route</h3>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("views/templates/dealer-widget.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/templates/dealer-widget.tpl.html",
    "<div class=\"panel\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"columns large-12\">\n" +
    "            <h3>Deck/Deal Controls</h3>\n" +
    "\n" +
    "            <p class=\"dealer-input\">\n" +
    "                <label for=\"newHandTotalCards\">How many cards you want?</label>\n" +
    "                <input type=\"number\" min=\"0\" max=\"{{deck.length}}\" id=\"newHandTotalCards\" ng-model=\"cardscount\"/>\n" +
    "            </p>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"columns large-6 medium-12 small-12 dealer-controls\">\n" +
    "                    <button class=\"button\" ng-click=\"resetTable()\">Reset Table</button>\n" +
    "                    <button ng-disabled=\"deck.length < 1\" class=\"button\" ng-click=\"shuffleDeck()\">Shuffle Deck</button>\n" +
    "                </div>\n" +
    "                <div class=\"columns large-6 medium-12 small-12 dealer-controls\">\n" +
    "                    <button ng-disabled=\"deck.length < 1\" class=\"button\" ng-click=\"drawHand()\">Draw Hand</button>\n" +
    "                    <button ng-disabled=\"draw == null || draw.length < 2\" class=\"button\" ng-click=\"sortDraw()\">Sort Draw</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/templates/deck-widget.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/templates/deck-widget.tpl.html",
    "<div class=\"panel\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"columns large-12\">\n" +
    "            <h3>Deck</h3>\n" +
    "            <p>The deck has {{deck.length}} remaining cards</p>\n" +
    "            <!-- TODO: Create a card for each totalDeckCards to visualise the deck -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/templates/draw-hand-widget.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/templates/draw-hand-widget.tpl.html",
    "<div class=\"panel\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"columns large-12\">\n" +
    "            <h3>Drawn Cards</h3>\n" +
    "            <ul class=\"deck\" ng-if=\"draw != null && draw.length > 0\">\n" +
    "                <li class=\"deck-card is-color-{{drawncard.color}} is-suit-{{drawncard.suit}}\" ng-repeat=\"drawncard in draw track by $index\">\n" +
    "                    [{{$index + 1}}] {{drawncard.color}} {{drawncard.name}}\n" +
    "                </li>\n" +
    "                <li class=\"\" ng-if=\"draw.length == 0\">\n" +
    "                    <strong>No cards have been drawn yet</strong>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <!-- TODO: Create a card for each drawn card to visualise the draw -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/templates/notification-widget.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/templates/notification-widget.tpl.html",
    "<div class=\"row\" ng-if=\"notification\">\n" +
    "    <div class=\"columns large-12\">\n" +
    "        <div class=\"alert-box success\">\n" +
    "            <p>{{notification}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
