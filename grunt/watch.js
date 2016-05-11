// -----------------------------
// Config Watch
// https://github.com/gruntjs/grunt-contrib-watch
// Watches your scss, js, hbs etc for changes and compiles them
// -----------------------------

module.exports = {
    grunt: {
        files: ['Gruntfile.js']
    },
    scss: {
        files: ['<%= config.scss.path %>/**/*.scss'],
        tasks: ['sass:release', 'autoprefixer:release']
    },
    js: {
        files: ['<%=config.js.scriptFileList%>', '<%=config.js.appFileList%>', 'Gruntfile.js'],
        tasks: ['uglify:release']
    },
    html2js: {
        files: ['<%= config.ngtpl.path %>'],
        tasks: ['html2js:app'],
        options: {
            livereload: true
        }
    },
    assemble: {
        files: ['<%= site.src %>/templates/**/*.hbs', '<%= site.src %>/templates/**/*.md'],
        tasks: ['clean', 'assemble'],
        options: {
            livereload: true
        }
    },
    karma: {
        files: ['js/src/**/*.js', 'test/unit/*.js'],
        tasks: ['karma:continuous:run']
    },
    livereload: {
        options: {
            livereload: true
        },
        files: ['<%= config.css.path %>/*.css', '<%=config.js.releaseDir%>/*.js']
    }
};
