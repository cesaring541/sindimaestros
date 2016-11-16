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

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.plugin(mongoosePaginate);

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);