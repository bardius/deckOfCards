// -----------------------------
// Config Coverals
// https://github.com/mattjmorrison/grunt-karma-coveralls
// Generate test coverage report
// -----------------------------

module.exports = {
    options: {
        debug: true,
        coverage_dir: 'test-coverage',
        dryRun: false,
        force: true,
        recursive: true
    }
};
