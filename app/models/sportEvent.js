var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sportEventSchema = mongoose.Schema({ 
	nameEvent						: { type: String, required: true },
	phase 		        	: { type: String, enum: ['Municipal','Zonal','Interzonal','Final'] },
	sport               : { type: String },
	category            : { type: String, enum: ['A', 'B', 'C', 'D', 'Ninguno'] },
	startDate           : { type: Date, required: true },
	endDate             : { type: Date, required: true },
	year								: { type: String, required: true },
	typeOfParticipation : { type: String, enum: ['Conjunto', 'Equipo', 'Individual', 'Ninguno'] },
	gender              : { type: String, enum: ['Masculino', 'Femenino', 'Mixto', 'Ninguno'] },
	teams               : [{ type: Schema.Types.ObjectId, ref: 'Team' }],
	participantsJoineds : [{ type: Schema.Types.ObjectId, ref: 'Joined' }],
	numberOfTeams       : { type: Number }
});

sportEventSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('SportEvent', sportEventSchema);