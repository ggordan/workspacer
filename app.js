var express = require('express')
  , fs      = require('fs')
  , cluster = require('cluster')
  , os      = require('os')
  , path    = require('path');

var app = express();

// Include the configuration for the application
require('./config/express.js')(app, __dirname);

// Include the configuration for the database
require('./config/mongoose.js');

// Load all the models
var models_path = path.join(__dirname, "models");
fs.readdirSync(models_path).forEach(function (file) {
    require(path.join(models_path, file));
});

// Include the routes
require('./config/routes.js')(app);

var number_of_cpus = os.cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < number_of_cpus; i++) {
        cluster.fork();
    }
    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    app.listen(app.get('port'), function() {
        console.log("Server is listening on port: %s, PID: %d", app.get('port'), process.pid);
    });
}