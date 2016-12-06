var mongoosePaginate = require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var joinedSchema = mongoose.Schema({
  fullname       					: { type: String, required: true },
  identityCard 				: { type: String, required: true },    
	birthdate 					: { type: Date },
	address 					: { type: String, required: true },
  email						: { type: String, required: true },
  rh 							: { type: String, enum: ['AB+','AB-','A+','A-','B+','B-','O+','O-'] },
  annexedDocument 			: [],
  gender 						: { type: String, enum: ['M','F','O'] },
  municipality    			: { type: String, required: true },
  cellPhoneNumber 			: { type: String, required: true },    
	educationalInstitution 		: { type: String, required: true },
	areaPerformance 			: { type: String, required: true },
	university 					: { type: String, enum: ['Si','No'] },
	normalista 					: { type: String, enum: ['Si','No'] },
	specialist					: { type: String, enum: ['Si','No'] },
	doctorate					: { type: String, enum: ['Si','No'] },
	typeOfAppointment 			: { type: String, enum: ['Provisional','Propiedad', 'Administrativo', 'Nacional', 'Departamental', 'Nacionalizado', 'Municipal' ] },
	state 						: { type: String, enum: ['Activo','Activo Pensionado', 'PensionadoRetirado'] },
	municipalityWorking    		: { type: String, required: true },
	degree 						: { type: String, required: true },
	professional 				: { type: String, enum: ['Si','No'] },
	MasterDegree 				: { type: String, enum: ['Si','No'] },	
	promotionLadder				: { type: String, required: true },
	Teaching 					: { type: String, enum: ['Si','No'] },
	level 						: { type: String, enum: ['Preescolar','Primaria','Basica','Media'] },
	municipalitySindical		: { type: String, required: true },
	affiliationPaymentType 		: { type: String, enum: ['Nomina','Ventanilla'] },
	integraCommission 			: { type: String, enum: ['Electoral','Financiera','Etica','Mujer','Pedagogica'] },
	Zone 						: { type: String, enum: ['Uno','Dos'] },
	integraCommittee        	: { type: String, enum: ['Ninguno','Municipal','Zonal','Directiva'] },
	delegateGeneralAssembly 	: { type: String, enum: ['Si','No', 'Municipio'] },
	employeeClass							: { type: String, enum: ['Docente','Directivo Docente', 'Administrativo'] }
});

joinedSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Joined', joinedSchema);