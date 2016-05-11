// -----------------------------
// Config Karma
// https://github.com/karma-runner/karma
// Runs the tests in multiple browsers
// -----------------------------

module.exports = {
    options: {
        configFile: 'test/karma-conf.js'
    },
    unit: {
        singleRun: true
    },
    continuous: {
        background: true
    }
};
