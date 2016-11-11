var mongoosePaginate=require('mongoose-paginate');
var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var required = require('required');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    joined		: { type: String, required: true,  enum: ['Si', 'No'] },
    name       	: { type: String, required: true},
    lastName	: { type: String, required: true},
    email		: { type: String},
    password 	: { type: String},
    role 		: { type: String, required: true,  enum: ['Administrador', 'Presidente', 'Fiscal', 'Tesorero'] }
});
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', userSchema);