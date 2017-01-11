var SportsEvent = require('./models/sportEvent'); //Import database model
var Teams = require('./models/team');
var moment = require('moment');

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
    var edition = moment(req.body.startDate).format('YYYY');

    romanEdition = setEdition(edition);
    console.log("romanEdition "+romanEdition);
    console.log(req.body.phase);

    objectSportEvent.nameEvent            = romanEdition+" Juegos de la Confraternidad Docente, fase "+req.body.phase;
    objectSportEvent.sport                = req.body.sport;
    objectSportEvent.category             = req.body.category;
    objectSportEvent.startDate            = req.body.startDate;
    objectSportEvent.endDate              = req.body.endDate;
    objectSportEvent.typeOfParticipation  = req.body.typeOfParticipation;
    objectSportEvent.gender               = req.body.gender;
    objectSportEvent.phase                = req.body.phase;
    objectSportEvent.teams                = req.body.teams;
    objectSportEvent.winer                = req.body.winer;

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

      objectSportEvent.nameEvent            = romanEdition+" Juegos de la Confraternidad Docente, fase "+phase;
      objectSportEvent.sport                = req.body.sport;
      objectSportEvent.category             = req.body.category;
      objectSportEvent.startDate            = req.body.startDate;
      objectSportEvent.endDate              = req.body.endDate;
      objectSportEvent.typeOfParticipation  = req.body.typeOfParticipation;    
      objectSportEvent.gender               = req.body.gender;
      objectSportEvent.phase                = req.body.phase;
      objectSportEvent.teams                = req.body.teams;
      objectSportEvent.winer                = req.body.winer;

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