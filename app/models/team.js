var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = mongoose.Schema({
  name					: { type: String, required: true },
  members				: [
  	{ type: Schema.Types.ObjectId, ref: 'Joined' }
  ],
  zone 					: { type: String, enum: ['Uno','Dos'], required: true },
  municipality	: { type: String, required: true }
});

teamSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Team', teamSchema);