// -----------------------------
// Config NgDocs
// https://github.com/m7r/grunt-ngdocs
// Generates documentation for AngularJS app
// -----------------------------

module.exports = {
    options: {
        scripts: [
            '../js/libs/angular/angular.js',
            '../js/src/*.js'
        ],
        html5Mode: false
    },
    all: [
        'js/src/**/*.js'
    ]
};
