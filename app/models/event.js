var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var eventSchema = mongoose.Schema({
	eventType			: { type: String, enum: ['Cultural','Academico','Capacitacion','Juntas','Otro'] },
    startDate 			: { type: Date},
    typeOfParticipation : { type: String, enum: ['Individual','Grupal'] },
    numberOfTeams		: { type: String, required: true},
    nameEvent			: { type: String, required: true},
    endDate				: { type: Date},
    teamMembers 		: { type: String, required: true}
});
eventSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Event', eventSchema);
