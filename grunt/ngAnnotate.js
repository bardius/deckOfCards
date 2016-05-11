// -----------------------------
// Config ngAnnotate
// https://github.com/mgol/grunt-ng-annotate
// Rebuild angularjs dependency injection annotations
// -----------------------------

module.exports = {
    release: {
        options: {
            singleQuotes: true
        },
        files: {
            '<%=config.js.releaseDir%><%=config.js.appReleaseFile%>': [
                '<%=config.js.releaseDir%><%=config.js.appReleaseFile%>'
            ]
        }
    }
};
