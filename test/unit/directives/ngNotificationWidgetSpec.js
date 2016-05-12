describe('Directive: Notification widget directive', function () {
    var rootScope, scope, element, template;

    beforeEach(function(){
        angular.mock.module('app', 'views/templates/notification-widget.tpl.html');

        inject(function (_$rootScope_, _$compile_, _$templateCache_) {
            rootScope = _$rootScope_;
            scope = _$rootScope_.$new();

            template = _$templateCache_.get('views/templates/notification-widget.tpl.html');
            _$templateCache_.put('views/templates/notification-widget.tpl.html', this.template);

            scope.notification = "Test message";

            element = _$compile_('<div ng-notification-widget notification="notification"></div>')(scope);

            scope.$digest();
        });
    });

    it('should display the test notification message', function () {
        expect(element.find('p').text()).toContain('Test message');
    });

});
