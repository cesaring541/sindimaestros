var mongoosePaginate=require('mongoose-paginate');
var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var required = require('required');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    joined		: { type: String, required: true,  enum: ['Si', 'No'] },
    fullname  : { type: String, required: true },
    email			: { type: String },
    password 	: { type: String },
    role 			: { type: String, required: true,  enum: ['Administrador', 'Presidente', 'Presidente Municipal', 'Presidente Zonal', 'Fiscal', 'Tesorero'] },
    municipality : { type: String }
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', userSchema);