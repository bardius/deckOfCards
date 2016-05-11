describe('Directive: Notification widget directive', function () {
    var scope, element, template;

    beforeEach(module('app', 'views/templates/notification-widget.tpl.html'));

    beforeEach(inject(function ($rootScope, $compile, $templateCache, $filter) {

        scope = $rootScope.$new();

        template = $templateCache.get('views/templates/notification-widget.tpl.html');
        $templateCache.put('views/templates/notification-widget.tpl.html', this.template);

        scope.notification = "Test message";

        element = $compile('<div ng-notification-widget notification="notification"></div>')(scope);

        scope.$digest();
    }));

    it('should display the test notification message', function () {
        expect(element.find('p').text()).toContain('Test message');
    });

});
