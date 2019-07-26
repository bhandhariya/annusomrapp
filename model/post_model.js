var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  post:{type:Schema.Types.String,required:true},
  date:{type:Schema.Types.Date,required:true},
  vote:{type:Schema.Types.Number}
});

module.exports = mongoose.model('Post', PostSchema);