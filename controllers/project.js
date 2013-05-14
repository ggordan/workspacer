
/**
 * Lists all the projects on the system.
 * @param req
 * @param res
 */

exports.list = function(req, res) {
    res.render('project/index', { title: 'Express' });
}

/**
 * Create a new project
 */
exports.add = function(req, res) {}

/**
 * Delete an existing project
 */
exports.delete = function(req, res) {}