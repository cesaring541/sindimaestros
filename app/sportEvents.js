var Sports = require('./models/sportEvent'); //Import database model

module.exports = function(app, passport) {

  app.get('/sportEvents', isLoggedIn, function(req, res, next) {
    Sports.find({},function(err, objSport){
      res.render('eventos_deportivos.ejs', {
        user : req.user, // Logged user
        objSport :objSport
      });
    });
  });

  //ADD Sport Events
  app.post('/new-sportEvent',function(req,res,next){

    var sport = new Sports();
    sport.nameEvent           = req.body.nameEvent;
    sport.category            = req.body.category;
    sport.startDate           = req.body.startDate;
    sport.endDate             = req.body.endDate;
    sport.typeOfParticipation = req.body.typeOfParticipation;
    sport.gender              = req.body.gender;

    sport.save(function (err) {
      if (err){
        console.log('err: '+err);
      } else {
        console.log('Objeto almacenado');
        res.redirect('/sportEvents');
      }
    });

  });

  //read event
  app.get('/read-sportEvent/:id',function(req, res){
    var id = req.param("id");
    Sports.findById(id, function(err, objSport){
      if (err) {
        res.send('error');
      }
      else{
        res.send(objSport);
      }
    });
  });

  //update sport event
  app.post('/update-sportEvent/:id', function(req, res, next){
    var id = req.param("id");

    Sports.findById(id, function(err, objSport){
      if (err) ;

      objSport.nameEvent           = req.body.nameEvent;
      objSport.category            = req.body.category;
      objSport.startDate           = req.body.startDate;
      objSport.endDate             = req.body.endDate;
      objSport.typeOfParticipation = req.body.typeOfParticipation;
      objSport.gender              = req.body.gender;

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
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
}




/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    Sports.find({},function(err, objSport){
    res.render('eventos_deportivos.ejs', {
      objSport:objSport,
      title: "Eventos Deportivos"
    });
  });
});

// MODULE Sport Events
//ADD Sport Events
router.post('/new-sportEvent',function(req,res,next){

  var sport = new Sport();
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
router.get('/read-sportEvent/:id',function(req, res){
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
router.post('/update-sportEvent/:id', function(req, res, next){
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
module.exports = router;*/
