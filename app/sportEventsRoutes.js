var SportsEvent = require('./models/sportEvent'); //Import database model
var Teams = require('./models/team');

module.exports = function(app, passport) {

  app.get('/sportEvents', isLoggedIn, function(req, res, next) {
    SportsEvent.find({},function(err, objectSportEvent){
      Teams.find({},function(err, objectTeam){
        res.render('eventos_deportivos.ejs', {
          user : req.user, // Logged user
          objectSportEvent :objectSportEvent,
          objectTeam : objectTeam,
          message: ""
        });
      });
    });
  });

  // Add new register
  app.post('/new-sportEvent',function(req,res,next){

    var objectSportEvent = new SportsEvent();

    objectSportEvent.nameEvent           = req.body.nameEvent;
    objectSportEvent.sport               = req.body.sport;
    objectSportEvent.category            = req.body.category;
    objectSportEvent.startDate           = req.body.startDate;
    objectSportEvent.endDate             = req.body.endDate;
    objectSportEvent.typeOfParticipation = req.body.typeOfParticipation;
    objectSportEvent.numberOfTeams       = req.body.numberOfTeams;
    objectSportEvent.gender              = req.body.gender;
    objectSportEvent.typeOfEvent         = req.body.typeOfEvent;
    objectSportEvent.teams               = req.body.teams;
    objectSportEvent.winer               = req.body.winer;

    objectSportEvent.save(function (err) {
      if (err){
        console.log('err: '+err);
      } else {
        console.log('Objeto almacenado');
        res.redirect('/sportEvents');
      }
    });
  });

  // Read object data
  app.get('/read-sportEvent/:id',function(req, res){
    var id = req.param("id");
    SportsEvent.findById(id, function(err, objSportEvent){
      if (err) {
        res.send('error');
      }
      else{
        res.send(objSportEvent);
      }
    });
  });

  // Update object data
  app.post('/update-sportEvent/:id', function(req, res, next){
    var id = req.param("id");

    SportsEvent.findById(id, function(err, objectSportEvent){
      if (err) ;

      objectSportEvent.nameEvent           = req.body.nameEvent;
      objectSportEvent.sport               = req.body.sport;
      objectSportEvent.category            = req.body.category;
      objectSportEvent.startDate           = req.body.startDate;
      objectSportEvent.endDate             = req.body.endDate;
      objectSportEvent.typeOfParticipation = req.body.typeOfParticipation;
      objectSportEvent.numberOfTeams       = req.body.numberOfTeams;      
      objectSportEvent.gender              = req.body.gender;
      objectSportEvent.typeOfEvent         = req.body.typeOfEvent;
      objectSportEvent.teams               = req.body.teams;
      objectSportEvent.winer               = req.body.winer;

      objectSportEvent.save({_id:id}, function(err){
        if (err) {
          res.redirect("/sportEvents");
        }
        else{
          res.redirect("/sportEvents");
        }
      });        
    });
  });
};

// Route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
};