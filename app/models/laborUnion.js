var mongoosePaginate = require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var laborUnionSchema = mongoose.Schema({

    boardType	: { type: String, enum: ['Sindicato','Municipal','Zonal','Nacional'] }
});

laborUnionSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('LaborUnion', laborUnionSchema);