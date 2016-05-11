// ------------------------------
// Grunt Configuration/Setup
// ------------------------------

'use strict';

module.exports = function (grunt) {

    // Project configuration
    var options = {
        init: true,
        data: {
            pkg: grunt.file.readJSON('package.json'),
            site: grunt.file.readYAML('statix-src/data/site.yml'),
            releaseVersion: grunt.option('releaseVersion') || '',
            config: {
                /**
                 * Config - Edit this section
                 * ==========================
                 * Choose javascript release file names
                 * Choose javascript release locations
                 * Choose javascript files to be uglyfied
                 */
                js: {
                    // <%=config.js.releaseDir%>
                    releaseDir: 'public_html/js/release/',
                    // <%=config.js.appReleaseFile%>
                    appReleaseFile: 'app.min.js',
                    // <%=config.js.appFileList%>
                    appFileList: [
                        'js/libs/angular/angular.js',
                        'js/libs/angular-route/angular-route.js',
                        'js/src/app.js',
                        'js/src/templates.js',
                        'js/src/controllers/*.js',
                        'js/src/models/*.js',
                        'js/src/services/*.js',
                        'js/src/filters/*.js',
                        'js/src/directives/*.js'
                    ],
                    // <%=config.js.releaseFile%>
                    releaseFile: 'scripts.min.js',
                    // <%=config.js.scriptFileList%>
                    scriptFileList: [
                        'js/libs/jquery/dist/jquery.js',
                        // Include only used Foundation 5 scripts if needed instead of the minified full framework ones
                        'js/libs/foundation/js/foundation.js',
                        // e.g
                        //'js/libs/foundation/js/foundation.js',
                        //'js/libs/foundation/js/foundation/*.js',
                        'js/helpers/smartResize.js',
                        'js/script.js'
                    ]
                },
                ngtpl: {
                    // <%= config.ngtpl.path %>
                    path: 'js/src/views/**/*.html',
                    dist: 'js/src/templates.js'
                },
                img: {
                    // <%= config.img.path %>
                    path: 'public_html/images'
                },
                css: {
                    // <%= config.css.path %>
                    path: 'public_html/css'
                },
                scss: {
                    // <%= config.scss.path %>
                    path: 'scss'
                },
                f5scss: {
                    // <%= config.f5scss.path %>
                    path: 'js/libs/foundation/scss'
                },
                bower: {
                    // <%= config.bower.path %>
                    path: './js/libs'
                },
                host: {
                    // <%= config.host.url %>
                    url: 'http://localhost:8000',
                    // <%= config.host.base %>
                    base: 'public_html',
                    // <%= config.host.port %>
                    port: '8000'
                },
                jstests: {
                    // <%= config.jstests.path %>
                    path: 'js/tests'
                },
                statix: {
                    // <%= config.statix.path %>
                    path: 'public_html'
                }
            }
        }
    };

    // Load the grunt configuration
    require('load-grunt-config')(grunt, options);
    require('jit-grunt')(grunt);

    // Load all the grunt tasks
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('assemble');


    /* ==========================================================================
     Available tasks:

     * grunt : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit
     * grunt watch : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, karma
     * grunt dev : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit
     * grunt jsdev : html2js, jshint, uglify, ngAnnotate
     * grunt bundle : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, combine_mq, csssplit, csso
     * grunt serve  : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, assemble, connect, karma, watch
     * grunt generate  : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, assemble
     * grunt document  : run ngdocs
     * grunt test:singlerun  : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, assemble, karma, connect, protractor
     * grunt travis :  run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, combine_mq, csssplit, csso
     ========================================================================== */

    /**
     * GRUNT
     * Default task
     * run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit
     */
    // Default task
    grunt.registerTask('default', [
        'dev'
    ]);


    /**
     * GRUNT JSDEV
     * A task for javascript development
     * run html2js, jshint, uglify, ngAnnotate
     */
    grunt.registerTask('jsdev', [
        'html2js:app',
        'jshint',
        'uglify:release',
        'ngAnnotate:release'
    ]);


    /**
     * GRUNT DEV
     * A task for development
     * run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit
     */
    grunt.registerTask('dev', [
        'jsdev',
        'sass:release',
        'autoprefixer:release',
        'csssplit:release'
    ]);


    /**
     * GRUNT BUNDLE
     * A task for your production/release environment
     * run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, combine_mq, csssplit, csso
     */
    grunt.registerTask('bundle', [
        'jsdev',
        'uglify:production',
        'uglify:ngproduction',
        'sass:production',
        'autoprefixer:release',
        'combine_mq:release',
        'csssplit:release',
        'csso:release'
    ]);


    /**
     * GRUNT GENERATE
     * A task for generating static HTML files
     * run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, assemble
     */
    grunt.registerTask("generate", [
        'dev',
        'assemble'
    ]);


    /**
     * GRUNT DOCUMENT
     * A task for generating documentation for AngularJS application
     * run ngdocs
     */
    grunt.registerTask("document", [
        'ngdocs'
    ]);


    /**
     * GRUNT SINGLETEST
     * A task for executing tests for AngularJS application
     * run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, assemble, karma, connect, protractor
     */
    grunt.registerTask("test:singlerun", [
        'generate',
        'karma:unit',
        'connect',
        'protractor:e2e'
    ]);


    /**
     * GRUNT SERVE
     * A task for a static server with watch
     * run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, assemble, connect, karma, watch
     */
    grunt.registerTask("serve", [
        'generate',
        'connect',
        'karma:continuous',
        'watch'
    ]);


    /**
     * GRUNT TRAVIS
     * A task for Travis CI to test build
     * run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, combine_mq, csssplit, csso
     */
    grunt.registerTask('travis', [
        'bundle'
    ]);
};
