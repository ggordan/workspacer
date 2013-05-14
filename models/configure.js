var
    mongoose = require('mongoose')
  , Schema = mongoose.Schema;


var ConfigureSchema = new Schema({
    first: Boolean,
    home_directory: String,
    workspace_directory: String
});

ProjectSchema.statics.firstRun = function (username, callback) {
    return this.find({ username: url }, callback);
};

mongoose.model('Configure', ConfigureSchema);