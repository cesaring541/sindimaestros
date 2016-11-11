var Team = require('./models/team'); //Import database model

var express = require('express');
var router = express.Router();

router.get('/team/', function(req, res, next) {

    Event.find({},function(err, objTeam){
    res.render('team/teams', {objTeam:objTeam});
  });
});

// MODULE teams
//ADD team
router.post('/new-team',function(req,res,next){

  var team = new Team();















  
  sport.startDate           = req.body.startDate;
  sport.typeOfParticipation = req.body.typeOfParticipation;
  sport.gender              = req.body.gender;
  sport.nameEvent           = req.body.nameEvent;
  sport.endDate             = req.body.endDate;
  sport.category            = req.body.category;

  sport.save(function (err) {
      console.log('err: '+err);
  });
    res.render('sport/sports');
});

//read event
router.get('/read-sport/:id',function(req, res){
  var id =req.param("id");
  Sport.findById(id, function(err, objSport){
    if (err) {
      res.send('error');
    }
    else{
      res.send({oobjSport:objSport});
    }
  });
});

//update sport event

router.post('/update-sport/:id', function(req, res, next){
  var id = req.param("id");

  Sport.findById(id, function(err, objSport){
    if (err) ;

    objSport.startDate           = req.body.startDate;
    objSport.typeOfParticipation = req.body.typeOfParticipation;
    objSport.gender              = req.body.gender;
    objSport.nameEvent           = req.body.nameEvent;
    objSport.endDate             = req.body.endDate;
    objSport.category            = req.body.category;

    objSport.save({_id:id}, function(err){
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
