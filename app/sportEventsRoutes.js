var SportsEvent = require('./models/sportEvent'); //Import database model
var Teams = require('./models/team');
var Joined = require('./models/joined');
var moment = require('moment');

module.exports = function(app, passport) {

  app.get('/sportEvents', isLoggedIn, function(req, res, next) {
    SportsEvent.find({},function(err, objectSportEvent){
      Teams.find({},function(err, objectTeam){
        Joined.find({}, function(err, objectJoined){
          res.render('eventos_deportivos.ejs', {
            user : req.user, // Logged user
            objectSportEvent :objectSportEvent,
            objectTeam : objectTeam,
            objectJoined: objectJoined,
            message: ""
          });
        });
      });
    });
  });

  // Add new register
  app.post('/new-sportEvent',function(req,res,next){

    var objectSportEvent = new SportsEvent();
    var edition = moment(req.body.startDate).format('YYYY');

    romanNumberEdition = setEdition(edition);

    objectSportEvent.nameEvent            = romanNumberEdition+" Juegos de la Confraternidad Docente, fase "+req.body.phase;
    objectSportEvent.phase                = req.body.phase;
    objectSportEvent.sport                = req.body.sport;
    objectSportEvent.startDate            = req.body.startDate;
    objectSportEvent.endDate              = req.body.endDate;
    objectSportEvent.year                 = edition;
    objectSportEvent.teams                = req.body.teams;
    objectSportEvent.participantsJoineds  = req.body.participantsJoineds;
    if (req.body.phase == "Interzonal") {
      objectSportEvent.numberOfTeams        = req.body.teams.length;
      objectSportEvent.category             = req.body.category;
      objectSportEvent.typeOfParticipation  = req.body.typeOfParticipation;
      objectSportEvent.gender               = req.body.gender;
    } else {
      objectSportEvent.numberOfTeams        = 0;
      objectSportEvent.category             = "Ninguno";
      objectSportEvent.typeOfParticipation  = "Ninguno";
      objectSportEvent.gender               = "Ninguno";
    }

    objectSportEvent.save(function (err) {
      if (err){
        console.log('error: '+err);
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

      var edition = moment(req.body.startDate).format('YYYY');

      romanNumberEdition = setEdition(edition);

      objectSportEvent.nameEvent            = romanNumberEdition+" Juegos de la Confraternidad Docente, fase "+req.body.phase;
      objectSportEvent.phase                = req.body.phase;
      objectSportEvent.sport                = req.body.sport;
      objectSportEvent.startDate            = req.body.startDate;
      objectSportEvent.endDate              = req.body.endDate;
      objectSportEvent.year                 = edition;
      objectSportEvent.teams                = req.body.teams;
      objectSportEvent.participantsJoineds  = req.body.participantsJoineds;
      if (req.body.phase == "Interzonal") {
        objectSportEvent.numberOfTeams        = req.body.teams.length;
        objectSportEvent.category             = req.body.category;
        objectSportEvent.typeOfParticipation  = req.body.typeOfParticipation;
        objectSportEvent.gender               = req.body.gender;
      } else {
        objectSportEvent.numberOfTeams        = 0;
        objectSportEvent.category             = "Ninguno";
        objectSportEvent.typeOfParticipation  = "Ninguno";
        objectSportEvent.gender               = "Ninguno";
      }

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


  // Ruta designada para inscripciones por parte de Presidente Municipales y Zonales
  app.get('/sportEventsInscriptions', isLoggedIn, function(req, res, next) {
    SportsEvent.find({},function(err, sportEvents){
      Teams.find({},function(err, teams){
        Joined.find({}, function(err, joineds){
          res.render('eventos_deportivos_inscripciones.ejs', {
            user : req.user, // Logged user
            sportEvents :sportEvents,
            teams : teams,
            joineds: joineds,
            message: ""
          });
        });
      });
    });
  });
};

var setEdition = function(year){
  var edition;

  if (year == 2014) {
    edition = "XV";
  } else if (year == 2015){
    edition = "XVI";
  } else if (year == 2016){
    edition = "XVII";
  } else if (year == 2017){
    edition = "XVIII";
  } else if (year == 2018){
    edition = "XIX";
  } else if (year == 2019){
    edition = "XX";
  } else if (year == 2020){
    edition = "XXI";
  } else if (year == 2021){
    edition = "XXII";
  } else if (year == 2022){
    edition = "XXIII";
  } else{
    edition = year.toString();
  }

  return edition;
}

// Route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
};