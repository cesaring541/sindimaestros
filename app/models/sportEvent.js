var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({    
    startDate 			: { type: Date},
    typeOfParticipation : { type: String, enum: ['Individual','Grupal'] },
    gender 				: { type: String, enum: ['M','F','O'] },
    nameEvent			: { type: String, required: true},
    endDate				: { type: Date},
    category	 		: { type: String, enum: ['A','B','C','D'] }
});
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', userSchema);