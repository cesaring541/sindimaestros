var mongoosePaginate=require('mongoose-paginate');
var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var required = require('required');
var bcrypt   = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var affiliationSchema = mongoose.Schema({
    userID  : { type: Schema.Types.ObjectId, ref: 'User' },
    unionID	: { type: Schema.Types.ObjectId, ref: 'laborUnion' },    
});

// generating a hash
affiliationSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
affiliationSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

affiliationSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('affiliation', affiliationSchema);