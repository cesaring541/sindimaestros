var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var sportEventSchema = mongoose.Schema({    
    startDate 			: { type: Date},
    typeOfParticipation : { type: String, enum: ['Individual','Grupal'] },
    gender 				: { type: String, enum: ['M','F','O'] },
    nameEvent			: { type: String, required: true},
    endDate				: { type: Date},
    category	 		: { type: String, enum: ['A','B','C','D'] }
});
sportEventSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('SportEvent', sportEventSchema);