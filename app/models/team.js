var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = mongoose.Schema({
	name					: { type: String, required: true },
	members				: [{ type: Schema.Types.ObjectId, ref: 'Joined' }],
	zone 					: { type: String, required: true },
	municipality	: { type: String, required: true },
	sport 				: { type: String, required: true },
	category 			: { type: String, enum: ['A','B','C','D'] }
});

teamSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Team', teamSchema);