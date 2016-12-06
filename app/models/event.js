var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var eventSchema = mongoose.Schema({
  nameEvent						: { type: String, required: true },
	eventType						: { type: String, enum: ['Cultural','Academico','Capacitacion','Juntas','Otro'] },
  startDate 					: { type: Date },
  endDate							: { type: Date },
  typeOfParticipation : { type: String, enum: ['Individual','Grupal'] },
  numberOfTeams				: { type: String, required: true },
  teamMembers 				: { type: String, required: true }
});

eventSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Event', eventSchema);
