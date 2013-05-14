module.exports = function(app) {

    // Dashboard
    var dashboard = require('../controllers/dashboard');
    app.get('/', dashboard.index);

    // Configuration
    var configure = require('../controllers/configure');

    // Project routes
    var project = require('../controllers/project');
    app.get('/projects/list', project.list);

};
