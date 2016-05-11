// -----------------------------
// Config Jasmine
// https://github.com/gruntjs/grunt-contrib-jasmine
// Run Jasmine unit tests
// -----------------------------

module.exports = {
    tests: {
        src: '<%=config.js.releaseDir%>/*.js',
        options: {
            vendor: [
                'js/libs/jquery/dist/jquery.js',
                'js/libs/jasmine-jquery/lib/jasmine-jquery.js'
            ],
            specs: '<%= config.jstests.path %>/*.spec.js'
        }
    }
};
