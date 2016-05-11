/*
 Project: Deck of Cards
 Authors: George Bardis
 */

// Create a closure to maintain scope of the '$' and BARDIS
(function(BARDIS, $, window, document, undefined) {

    'use strict';

    $(function() {
        BARDIS.Config.init();
    });

    BARDIS.Config = {
        $body: $(document.body),
        init: function() {

            BARDIS.windowResize.init();
            BARDIS.foundation.init();
            BARDIS.Config.fixOffScreenMenu();
        },
        fixOffScreenMenu: function(){
            $('.left-off-canvas-toggle.menu-icon').on('click', function(){
                $('html, body').animate({
                    scrollTop: 0
                }, 1);
            });
        }
    };

    BARDIS.foundation = {
        init: function() {

            $(document).foundation({
                offcanvas: {
                    open_method: 'move', // Sets method in which offcanvas opens, can also be 'overlap'
                    close_on_click: true
                }
            });
        }
    };

    BARDIS.windowResize = {
        init: function() {
            $(window).smartresize(function() {
            });
        }
    };

})(window.BARDIS = window.BARDIS || {}, jQuery, window, document);
