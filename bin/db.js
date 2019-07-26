var mongoose = require('mongoose');

var mongoURI = "mongodb://raja:raja1234@ds153947.mlab.com:53947/jalantechnologies";



mongoose.Promise = global.Promise;
mongoose.connect(mongoURI,{useNewUrlParser:true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connection open");
});
exports.db = db;