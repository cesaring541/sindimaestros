var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var laborUnionSchema = mongoose.Schema({

    boardType	: { type: String, enum: ['Sindicato','Municipal','Zonal','Nacional'] },
    joined     	: { type: String, required: true}
});

laborUnionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('laborUnion', laborUnionSchema);