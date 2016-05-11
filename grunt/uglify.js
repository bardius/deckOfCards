// -----------------------------
// Config Uglify
// https://github.com/gruntjs/grunt-contrib-uglify
// Minifies and concatenates your JS
// -----------------------------

module.exports = {
    release: {
        options: {
            mangle: false, // mangle: Turn on or off mangling
            beautify: true, // beautify: beautify your code for debugging/troubleshooting purposes
            // report: 'gzip', // report: Show file size report
            sourceMap: function(path) {
                return path.replace(/.js/,".map");
            },
            compress: false
        },
        files: {
            '<%=config.js.releaseDir%><%=config.js.releaseFile%>': '<%=config.js.scriptFileList%>',
            '<%=config.js.releaseDir%><%=config.js.appReleaseFile%>': '<%=config.js.appFileList%>'
        }
    },
    production: {
        options: {
            mangle: true,
            beautify: false,
            compress: {
                drop_console: true
            }
        },
        files: {
            '<%=config.js.releaseDir%><%=config.js.releaseFile%>': '<%=config.js.scriptFileList%>'
        }
    },
    ngproduction: {
        options: {
            mangle: true,
            beautify: false,
            compress: {
                drop_console: true
            }
        },
        files: {
            '<%=config.js.releaseDir%><%=config.js.appReleaseFile%>': '<%=config.js.releaseDir%><%=config.js.appReleaseFile%>'
        }
    }
};
