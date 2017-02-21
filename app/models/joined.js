var mongoosePaginate = require('mongoose-paginate');
var mongoose = require('mongoose');

var joinedSchema = mongoose.Schema({
	identityCard			: { type: String },    
	fullName				: { type: String },
	birthdate				: { type: String },
	address					: { type: String },
	email					: { type: String },
	rh						: { type: String, enum: ['Ninguno','AB+','AB-','A+','A-','B+','B-','O+','O-'] },
	gender					: { type: String, enum: ['Ninguno','M','F','O'] },
	municipality 			: { type: String },
	cellPhoneNumber			: { type: String },    
	educationalInstitution	: { type: String },
	areaPerformance			: { type: String, enum: ['Ninguno','Primaria', 'Bachillerato', 'DirectivoDocente', 'Provisional', 'Administrativo'] },
	university				: { type: String},
	normalista				: { type: String}, 
	specialist				: { type: String},
	doctorate				: { type: String},
	typeOfAppointment		: { type: String, enum: ['Ninguno','Provisional','Propiedad', 'Administrativo', 'Nacional', 'Departamental', 'Nacionalizado', 'Municipal'] },
	state					: { type: String, enum: ['Inactivo','Activo','ActivoPensionado', 'PensionadoRetirado'] },
	municipalityWorking		: { type: String },
	degree 					: { type: String },
	professional			: { type: String, enum: ['Ninguno','licenciado','profesional'] },
	MasterDegree			: { type: String, enum: ['Ninguno','Si','No'] },	
	promotionLadder			: { type: String },
	Teaching				: { type: String, enum: ['Ninguno','1278','2277'] },
	level					: { type: String, enum: ['Ninguno','Preescolar','Primaria','Basica','Media'] },
	municipalitySindical	: { type: String },
	affiliationPaymentType	: { type: String, enum: ['Ninguno','Nomina','Ventanilla'] },
	integraCommission		: { type: String, enum: ['Ninguno','Electoral','Financiera','Etica','Mujer','Pedagogica'] },
	Zone					: { type: String},
	integraCommittee		: { type: String, enum: ['Ninguno','Municipal','Zonal','Directivo'] },
	delegateGeneralAssembly	: { type: String, enum: ['Ninguno','Si','No', 'Municipio'] },
	employeeClass			: { type: String, enum: ['Ninguno','Docente','Directivo Docente', 'Administrativo'] }
});

joinedSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Joined', joinedSchema);