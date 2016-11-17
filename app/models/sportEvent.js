var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var sportEventSchema = mongoose.Schema({    
    nameEvent			: { type: String, required: true},
    category	 		: { type: String, enum: ['A','B','C','D'] },
    startDate 			: { type: Date},
    endDate				: { type: Date},
    typeOfParticipation : { type: String, enum: ['Individual','Grupal'] },
    gender 				: { type: String, enum: ['M','F','O'] }
});
sportEventSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('SportEvent', sportEventSchema);