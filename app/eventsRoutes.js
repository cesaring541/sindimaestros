var Event = require('./models/event'); //Import database model

module.exports = function(app, passport) {

  app.get('/events', isLoggedIn, function(req, res, next) {
    Event.find({},function(err, objEvent){
      res.render('eventos.ejs', {
        user : req.user, // Logged user
        objEvent: objEvent,
        message: ""
      });
    });
  });

  // Add new register
  app.post('/new-event',function(req,res,next){

    var event = new Event();
    event.nameEvent             = req.body.nameEvent;
    event.eventType             = req.body.eventType;
    event.startDate             = req.body.startDate; 
    event.endDate               = req.body.endDate;
    event.typeOfParticipation   = req.body.typeOfParticipation;
    event.numberOfTeams         = req.body.numberOfTeams; 
    event.teamMembers           = req.body.teamMembers;

    event.save(function (err) {
      if (err){
        console.log('err: '+err);
      } else {
        console.log('Objeto almacenado');
        res.redirect('/events');
      }
    });
  });

  // Read object data
  app.get('/read-event/:id',function(req, res){
    var id = req.param("id");
    Event.findById(id, function(err, objEvent){
      if (err) {
        res.send('error');
      }
      else{
        res.send(objEvent);
      }
    });
  });

  // Update object data
  app.post('/update-event/:id', function(req, res, next){
    var id = req.param("id");

    Event.findById(id, function(err, objEvent){
      if (err) ;

      objEvent.nameEvent             = req.body.nameEvent;
      objEvent.eventType             = req.body.eventType;
      objEvent.startDate             = req.body.startDate; 
      objEvent.endDate               = req.body.endDate;
      objEvent.typeOfParticipation   = req.body.typeOfParticipation;
      objEvent.numberOfTeams         = req.body.numberOfTeams; 
      objEvent.teamMembers           = req.body.teamMembers;

      objEvent.save({_id:id}, function(err){
        if (err) {
          console.log("error" + err)
          res.redirect("/events");
        }
        else{
          console.log(req.body)
          res.redirect("/events");
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
