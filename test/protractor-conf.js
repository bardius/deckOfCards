// Configuring the test reporting/screenshots
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'test/test-results/screenshots',
    filename: 'test-report.html',
    cleanDestination: true,
    showSummary: true,
    showConfiguration: false,
    reportTitle: 'Application Test Report',
    captureOnlyFailedSpecs: false,
    showQuickLinks: true,
    pathBuilder: function(currentSpec, suites, browserCapabilities) {
        var monthMap = {
            "1": "Jan",
            "2": "Feb",
            "3": "Mar",
            "4": "Apr",
            "5": "May",
            "6": "Jun",
            "7": "Jul",
            "8": "Aug",
            "9": "Sep",
            "10": "Oct",
            "11": "Nov",
            "12": "Dec"
        };

        var currentDate = new Date(),
            currentHoursIn24Hour = currentDate.getHours(),
            currentTimeInHours = currentHoursIn24Hour>12? currentHoursIn24Hour-12: currentHoursIn24Hour,
            totalDateString = currentDate.getDate()+'-'+ monthMap[currentDate.getMonth()]+ '-'+(currentDate.getYear()+1900) +
                '-'+ currentTimeInHours+'h-' + currentDate.getMinutes()+'m';

        return totalDateString + '/' + browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
    }
});

exports.config = {
    // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.42.0.jar',
    // chromeDriver: '../node_modules/protractor/selenium/chromedriver',

    // location of E2E test specs
    specs: [
        '../test/e2e/*.js'
    ],

    // configure multiple browsers to run tests
    // multiCapabilities: [{
    //   'browserName': 'firefox'
    // }, {
    //   'browserName': 'chrome'
    // }, {
    //   'browserName': 'safari'
    // }],

    // or configure a single browser
    capabilities: {
        'browserName': 'chrome'
    },


    // url where your app is running, relative URLs are prepending with this URL
    baseUrl: 'http://localhost:8000/',

    seleniumArgs: ['-browserTimeout=60'],

    // testing framework, jasmine is the default
    framework: 'jasmine',

    // Selector for the element housing the angular app - this defaults to
    // body, but is necessary if ng-app is on a descendant of <body>
    rootElement: 'body',

    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    // Options to be passed to minijasminenode
    jasmineNodeOpts: {
        jasmineNodeOpts: {
            // onComplete will be called just before the driver quits.
            onComplete: null,
            // If true, display spec names.
            isVerbose: false,
            // If true, print colors to the terminal.
            showColors: true,
            // If true, include stack traces in failures.
            includeStackTrace: true,
            // Default time to wait in ms before a test fails.
            defaultTimeoutInterval: 10000
        }
    }
};
