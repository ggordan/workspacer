var os = require('os');

exports.index = function(req, res) {
    res.render('dashboard/index', { title: 'Express' });
}