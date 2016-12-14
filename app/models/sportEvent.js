var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var sportEventSchema = mongoose.Schema({    
    nameEvent			: { type: String, required: true },
    sport 				: { type: String, required: true },
    category	 		: { type: String, enum: ['A','B','C','D'] },
    startDate 			: { type: String, required: true },
    endDate				: { type: String, required: true  },
    typeOfParticipation : { type: String, enum: ['Conjunto', 'Equipo','Individual'] },
    numberOfTeams		: { type: String, required: true },
    gender 				: { type: String, enum: ['M','F','O'] },
    typeOfEvent 		: { type: String, enum: ['Municipal','Zonal','Interzonal', 'final'] },
    teams               : { type: String }, 
    winer 				: { type: String }
});

sportEventSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('SportEvent', sportEventSchema);