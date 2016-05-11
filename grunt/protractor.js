// -----------------------------
// Config Protractor
// https://github.com/teerapap/grunt-protractor-runner
// Runs the end to end tests for the angular application
// -----------------------------

module.exports = {
    options: {
        configFile: "test/protractor-conf.js", // Default config file
        // keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        // debug: true,
        args: {}
    },
    e2e: {
        options: {
            keepAlive: false
        }
    },
    continuous: {
        options: {
            keepAlive: true
        }
    }
};
