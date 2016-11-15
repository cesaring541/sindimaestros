var Joined = require('./models/joined'); //Import database model

var express = require('express');
var router = express.Router();

router.get('/joineds/', function(req, res, next) {

    Joined.find({},function(err, objJoined){
    res.render('joined/joineds', {objJoined:objJoined});
  });
});
// MODULE Joineds
//ADD joined
router.post('/new-joined',function(req,res,next){

	var joined = new Joined();


	joined.name 						=req.body.name;
	joined.lastName 					=req.body.lastName;
	joined.identityCard 				=req.body.identityCard;
	joined.birthdate 					=req.body.birthdate;
	joined.address 						=req.body.address;
	joined.email 						=req.body.email;
	joined.rh 							=req.body.rh;
	joined.annexedDocument 				=req.body.annexedDocument;
	joined.gender 						=req.body.gender;
	joined.municipality 				=req.body.municipality;
	joined.cellPhoneNumber 				=req.body.cellPhoneNumber;
	joined.educationalInstitution 		=req.body.educationalInstitution;
	joined.areaPerformance 				=req.body.areaPerformance;
	joined.university 					=req.body.university;
	joined.normalista 					=req.body.normalista;
	joined.specialist 					=req.body.specialist;
	joined.doctorate 					=req.body.doctorate;
	joined.typeOfAppointment 			=req.body.typeOfAppointment;
	joined.state 						=req.body.state;
	joined.municipalityWorking 			=req.body.municipalityWorking;
	joined.degree 						=req.body.degree;
	joined.professional 				=req.body.professional;
	joined.MasterDegree 				=req.body.MasterDegree;
	joined.promotionLadder 				=req.body.promotionLadder;
	joined.Teaching 					=req.body.Teaching;
	joined.level 						=req.body.level;
	joined.municipalitySindical 		=req.body.municipalitySindical;
	joined.affiliationPaymentType 		=req.body.affiliationPaymentType;
	joined.integraCommission 			=req.body.integraCommission;
	joined.Zone 						=req.body.Zone;
	joined.integraCommittee 			=req.body.integraCommittee;
	joined.delegateGeneralAssembly 		=req.body.delegateGeneralAssembly;


    joined.save(function (err) {
      console.log('err: '+err);
  });
    res.render('joined/joineds');

});

//read joined

router.get('/read-joined/:id',function(req, res){
  var id =req.param("id");

  Joined.findById(id, function(err, objJoined){
    if (err) {
      res.send('error');
    }
    else{
      res.send({objJoined:objJoined});
    }
  });
});

//update joined

router.post('/update-joined/:id', function(req, res, next){
  var id = req.param("id");

  Joined.findById(id, function(err, objJoined){
    if (err);

	objJoined.name 						=req.body.name;
	objJoined.lastName 					=req.body.lastName;
	objJoined.identityCard 				=req.body.identityCard;
	objJoined.birthdate 				=req.body.birthdate;
	objJoined.address 					=req.body.address;
	objJoined.email 					=req.body.email;
	objJoined.rh 						=req.body.rh;
	objJoined.annexedDocument 			=req.body.annexedDocument;
	objJoined.gender 					=req.body.gender;
	objJoined.municipality 				=req.body.municipality;
	objJoined.cellPhoneNumber 			=req.body.cellPhoneNumber;
	objJoined.educationalInstitution 	=req.body.educationalInstitution;
	objJoined.areaPerformance 			=req.body.areaPerformance;
	objJoined.university 				=req.body.university;
	objJoined.normalista 				=req.body.normalista;
	objJoined.specialist 				=req.body.specialist;
	objJoined.doctorate 				=req.body.doctorate;
	objJoined.typeOfAppointment 		=req.body.typeOfAppointment;
	objJoined.state 					=req.body.state;
	objJoined.municipalityWorking 		=req.body.municipalityWorking;
	objJoined.degree 					=req.body.degree;
	objJoined.professional 				=req.body.professional;
	objJoined.MasterDegree 				=req.body.MasterDegree;
	objJoined.promotionLadder 			=req.body.promotionLadder;
	objJoined.Teaching 					=req.body.Teaching;
	objJoined.level 					=req.body.level;
	objJoined.municipalitySindical 		=req.body.municipalitySindical;
	objJoined.affiliationPaymentType 	=req.body.affiliationPaymentType;
	objJoined.integraCommission 		=req.body.integraCommission;
	objJoined.Zone 						=req.body.Zone;
	objJoined.integraCommittee 			=req.body.integraCommittee;
	objJoined.delegateGeneralAssembly	=req.body.delegateGeneralAssembly;


    objJoined.save({_id:id}, function(err){
      if (err) {
        res.end('error');
      }
      else{
        res.send('success');
      }
    });        
  });
});
module.exports = router;
