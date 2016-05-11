module.exports = function (config) {
    config.set({
        //  root path location that will be used to resolve all relative paths in files and exclude sections
        basePath: '../',

        // files to include, ordered by dependencies
        files: [
            // include relevant Angular files and libs
            'js/libs/angular/angular.js',
            'js/libs/angular-route/angular-route.js',
            'js/libs/angular-mocks/angular-mocks.js',

            // include JS files
            'js/src/**/*.js',
            'js/src/app.js',
            'js/src/templates.js',

            // include html template files
            // 'app/partials/directives/*.html',
            // 'app/partials/*.html',

            // include unit test specs
            'test/unit/**/*.js',
            'test/unit/*.js'
        ],

        // list of karma plugins
        plugins: [
            'karma-jshint-preprocessor',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor',
            'karma-phantomjs-launcher'
        ],

        // map of preprocessors that is used mostly for plugins
        preprocessors: {
            // 'public_html/views/partials/directives/*.html': 'ng-html2js',
            // 'public_html/views/partials/*.html': 'ng-html2js'

            // test coverage
            'js/src/views/**/*.html': ['ng-html2js'],
            'js/src/controllers/*.js': ['jshint', 'coverage'],
            'js/src/filters/*.js': ['jshint', 'coverage'],
            'js/src/models/*.js': ['jshint', 'coverage'],
            'js/src/services/*.js': ['jshint', 'coverage'],
            'js/src/directives/*.js': ['jshint', 'coverage'],
            'js/src/app.js': ['jshint', 'coverage']
        },

        // files to exclude
        exclude: [
            'js/libs/angular/angular-loader.js',
            'js/libs/angular/*.min.js',
            'js/libs/angular/angular-scenario.js'
        ],

        // karma has its own autoWatch feature but Grunt watch can also do this
        autoWatch: false,

        // testing framework, be sure to install the correct karma plugin
        frameworks: ['jasmine'],

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 30000,

        // plugin settings
        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/'
        },

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            // directory where coverage results are saved
            dir: './test/test-results/coverage/',
            reporters: [
                { type: 'html', subdir: 'report-html' },
                { type: 'teamcity', subdir: '.', file: 'teamcity.txt' }
            ],
            instrumenterOptions: {
                istanbul: { noCompact: true }
            }
        },

        junitReporter: {
            outputFile: './test/test-results/junit-results.xml'
        }
    })
};
