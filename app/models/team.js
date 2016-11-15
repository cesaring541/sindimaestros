var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var teamSchema = mongoose.Schema({
    event		: { type: String, required: true},
    nameTeam   	: { type: String, required: true},
    members  	: { type: String, required: true}
});
teamSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Team', teamSchema);