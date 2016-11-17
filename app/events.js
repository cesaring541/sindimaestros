var Event = require('./models/event'); //Import database model

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    Event.find({},function(err, objEvent){
    res.render('eventos.ejs', {
      user : req.user, // Logged user
      objEvent:objEvent
    });
  });
});

// MODULE Events
//ADD Event
router.post('/new-event',function(req,res,next){

  var event = new Event();

  event.eventType             = req.body.eventType;
  event.startDate             = req.body.startDate; 
  event.typeOfParticipation   = req.body.typeOfParticipation;
  event.numberOfTeams         = req.body.numberOfTeams; 
  event.nameEvent             = req.body.nameEvent;
  event.endDate               = req.body.endDate;
  event.teamMembers           = req.body.teamMembers;

  event.save(function (err) {
      console.log('err: '+err);
  });
    res.render('events/events');
});

//read event
router.get('/read-event/:id',function(req, res){
  var id =req.param("id");
  Event.findById(id, function(err, objEvent){
    if (err) {
      res.send('error');
    }
    else{
      res.send({objEvent:objEvent});
    }
  });
});

//update vehicle

router.post('/update-event/:id', function(req, res, next){
  var id = req.param("id");

  Event.findById(id, function(err, objEvent){
    if (err) ;

    objEvent.eventType             = req.body.eventType;
    objEvent.startDate             = req.body.startDate; 
    objEvent.typeOfParticipation   = req.body.typeOfParticipation;
    objEvent.numberOfTeams         = req.body.numberOfTeams; 
    objEvent.nameEvent             = req.body.nameEvent;
    objEvent.endDate               = req.body.endDate;
    objEvent.teamMembers           = req.body.teamMembers;

    objEvent.save({_id:id}, function(err){
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
