var Joined = require('./models/joined'); //Import database model

module.exports = function(app, passport) {

  app.get('/joineds', isLoggedIn, function(req, res, next) {
    Joined.find({},function(err, objectJoined){
      res.render('afiliados.ejs', {
        user : req.user, // Logged user
        objectJoined: objectJoined,
        message: ""
      });
    });
  });

  // Add new register
  app.post('/new-joined',function(req,res,next){

	  	var objJoined = new Joined();

		objJoined.identityCard 						= req.body.identityCard;
		objJoined.fullName 								= req.body.fullName;
		objJoined.birthdate 								= req.body.birthdate;
		objJoined.address 									= req.body.address;
		objJoined.email 										= req.body.email;
		objJoined.rh 											= req.body.rh;
		objJoined.gender 									= req.body.gender;
		objJoined.municipality 						= req.body.municipality;
		objJoined.cellPhoneNumber 					= req.body.cellPhoneNumber;
		objJoined.educationalInstitution 	= req.body.educationalInstitution;
		objJoined.areaPerformance 					= req.body.areaPerformance;
		objJoined.university 							= req.body.university;
		objJoined.normalista 							= req.body.normalista;
		objJoined.specialist 							= req.body.specialist;
		objJoined.doctorate 								= req.body.doctorate;
		objJoined.typeOfAppointment 				= req.body.typeOfAppointment;
		objJoined.state 										= req.body.state;
		objJoined.municipalityWorking 			= req.body.municipalityWorking;
		objJoined.degree 									= req.body.degree;
		objJoined.professional 						= req.body.professional;
		objJoined.MasterDegree 						= req.body.MasterDegree;
		objJoined.promotionLadder 					= req.body.promotionLadder;
		objJoined.Teaching 								= req.body.Teaching;
		objJoined.level 										= req.body.level;
		objJoined.municipalitySindical 		= req.body.municipalitySindical;
		objJoined.affiliationPaymentType 	= req.body.affiliationPaymentType;
		objJoined.integraCommission 				= req.body.integraCommission;
		objJoined.Zone 										= req.body.Zone;
		objJoined.integraCommittee 				= req.body.integraCommittee;
		objJoined.delegateGeneralAssembly	= req.body.delegateGeneralAssembly;
		objJoined.employeeClass						= req.body.employeeClass;
    
	    objJoined.save(function (err) {
	      if (err){
	        console.log('Error creando objeto: '+err);
	        res.redirect('/joineds');
	      } else {
	        console.log('Objeto almacenado');
	        res.redirect('/joineds');
	      }
	    });
  });

  // Read object data
  app.get('/read-joined/:id',function(req, res){
    var id = req.param("id");
    Joined.findById(id, function(err, objJoined){
      if (err) {
        res.send('error');
      }
      else{
        res.send(objJoined);
      }
    });
  });

  // Update object data
  app.post('/update-joined/:id', function(req, res, next){
    var id = req.param("id");

    Joined.findById(id, function(err, objJoined){
  		if (err) ;

		objJoined.identityCard 						= req.body.identityCard;
    	objJoined.fullName 								= req.body.fullName;
		objJoined.birthdate 							= req.body.birthdate;
		objJoined.address 								= req.body.address;
		objJoined.email 									= req.body.email;
		objJoined.rh 											= req.body.rh;
		objJoined.gender 									= req.body.gender;
		objJoined.municipality 						= req.body.municipality;
		objJoined.cellPhoneNumber 				= req.body.cellPhoneNumber;
		objJoined.educationalInstitution 	= req.body.educationalInstitution;
		objJoined.areaPerformance 				= req.body.areaPerformance;
		objJoined.university 							= req.body.university;
		objJoined.normalista 							= req.body.normalista;
		objJoined.specialist 							= req.body.specialist;
		objJoined.doctorate 							= req.body.doctorate;
		objJoined.typeOfAppointment 			= req.body.typeOfAppointment;
		objJoined.state 									= req.body.state;
		objJoined.municipalityWorking 		= req.body.municipalityWorking;
		objJoined.degree 									= req.body.degree;
		objJoined.professional 						= req.body.professional;
		objJoined.MasterDegree 						= req.body.MasterDegree;
		objJoined.promotionLadder 				= req.body.promotionLadder;
		objJoined.Teaching 								= req.body.Teaching;
		objJoined.level 									= req.body.level;
		objJoined.municipalitySindical 		= req.body.municipalitySindical;
		objJoined.affiliationPaymentType 	= req.body.affiliationPaymentType;
		objJoined.integraCommission 			= req.body.integraCommission;
		objJoined.Zone 										= req.body.Zone;
		objJoined.integraCommittee 				= req.body.integraCommittee;
		objJoined.delegateGeneralAssembly	= req.body.delegateGeneralAssembly;
		objJoined.employeeClass						= req.body.employeeClass;

		console.log(req.body)
		

      	objJoined.save({_id:id}, function(err){
	        if (err) {
	        	console.log("Error modificando objeto")
	        	console.log(err)
	          	res.redirect("/joineds");
	        } else{
	        	console.log("Objeto modificado")
	          	res.redirect("/joineds");
	        }
      	});
    });
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
      return next();

  res.redirect('/login');
};
