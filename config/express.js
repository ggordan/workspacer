var
    path = require('path'),
    express = require('express');

module.exports = function(app, APPLICATION_ROOT) {

    app.use(express.favicon());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());

    app.set('APPLICATION_ROOT', APPLICATION_ROOT);

    app.set('port', process.env.PORT || 8901);
    // Use the Jade templating engine
    app.set('view engine', 'jade');
    // Define the views directory
    app.set('views', APPLICATION_ROOT + '/views');
    // Define the path for static content
    app.use(express.static(path.join(APPLICATION_ROOT, 'public')));
    // Parses request body and populates request.body
    app.use(express.bodyParser());
    // Checks request.body for HTTP method overrides
    app.use(express.methodOverride());
    // Perform route lookup based on url and HTTP method
    app.use(app.router);

    app.configure('development', function() {
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

};