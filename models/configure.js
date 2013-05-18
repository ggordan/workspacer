var
    mongoose = require('mongoose')
  , Schema = mongoose.Schema;


var ConfigureSchema = new Schema({
    first: Boolean,
    username: String,
    home_directory: String,
    workspace_directory: String
});

ConfigureSchema.statics.firstRun = function (username, callback) {
    var user = this.find({ username: username }, callback);
    if (true === user.first) {
        return true;
    } else {
        return false;
    }
};

mongoose.model('Configure', ConfigureSchema);