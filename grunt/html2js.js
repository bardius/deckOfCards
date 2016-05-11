// -----------------------------
// Config Html2JS
// karlgoldstein/grunt-html2js
// Conver the HTML templates to js file
// -----------------------------

module.exports = {
    options: {
        base: 'js/src'
    },
    app: {
        src: '<%= config.ngtpl.path %>',
        dest: '<%= config.ngtpl.dist %>'
    }
};
