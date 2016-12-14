var Sports = require('./models/sportEvent'); //Import database model

module.exports = function(app, passport) {

  app.get('/sportEvents', isLoggedIn, function(req, res, next) {
    Sports.find({},function(err, objSport){
      res.render('eventos_deportivos.ejs', {
        user : req.user, // Logged user
        objSport :objSport,
        message: ""
      });
    });
  });

  // Add new register
  app.post('/new-sportEvent',function(req,res,next){

    var sport = new Sports();
    sport.nameEvent           = req.body.nameEvent;
    sport.sport               = req.body.sport;
    sport.category            = req.body.category;
    sport.startDate           = req.body.startDate;
    sport.endDate             = req.body.endDate;
    sport.typeOfParticipation = req.body.typeOfParticipation;
    sport.numberOfTeams       = req.body.numberOfTeams;
    sport.gender              = req.body.gender;
    sport.typeOfEvent         = req.body.typeOfEvent;
    sport.teams               = req.body.teams;
    sport.winer               = req.body.winer;






    sport.save(function (err) {
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
    Sports.findById(id, function(err, objSport){
      if (err) {
        res.send('error');
      }
      else{
        res.send(objSport);
      }
    });
  });

  // Update object data
  app.post('/update-sportEvent/:id', function(req, res, next){
    var id = req.param("id");

    Sports.findById(id, function(err, objSport){
      if (err) ;

      objSport.nameEvent           = req.body.nameEvent;
      objSport.sport               = req.body.sport;
      objSport.category            = req.body.category;
      objSport.startDate           = req.body.startDate;
      objSport.endDate             = req.body.endDate;
      objSport.typeOfParticipation = req.body.typeOfParticipation;
      objSport.numberOfTeams       = req.body.numberOfTeams;      
      objSport.gender              = req.body.gender;
      objSport.typeOfEvent         = req.body.typeOfEvent;
      objSport.teams               = req.body.teams;
      objSport.winer               = req.body.winer;

      objSport.save({_id:id}, function(err){
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