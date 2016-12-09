var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var eventSchema = mongoose.Schema({
  nameEvent						: { type: String, required: true },
  eventType						: { type: String, enum: ['Seminario','Capacitacion', 'Asambleas', 'Marchas','Cultural','Academico'] },
  startDate 					: { type: String, required: true },
  endDate						: { type: String, required: true },
  typeOfParticipation 			: { type: String, enum: ['Individual','Grupal'] },
  numberOfTeams					: { type: String, required: true },
  teamMembers 					: { type: String, required: true }
});

eventSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Event', eventSchema);
