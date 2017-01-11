var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sportEventSchema = mongoose.Schema({    
    nameEvent			: { type: String, required: true },
    sport 				: { type: String },
    category	 		: { type: String, enum: ['A','B','C','D'] },
    startDate 			: { type: Date, required: true },
    endDate				: { type: Date, required: true },
    typeOfParticipation : { type: String, enum: ['Conjunto', 'Equipo','Individual'] },
    gender 				: { type: String, enum: ['M','F','O'] },
    phase 		        : { type: String, enum: ['Municipal','Zonal','Interzonal','final'] },
    teams               : [{ type: Schema.Types.ObjectId, ref: 'Team' }], 
    winer 				: { type: String }
});

sportEventSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('SportEvent', sportEventSchema);