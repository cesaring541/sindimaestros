var Team = require('./models/team'); //Import database model
var Joined = require('./models/joined');

module.exports = function(app, passport) {

  app.get('/teams', isLoggedIn, function(req, res, next) {
    Team.find({},function(err, objectTeam){
    	Joined.find({},function(err, objectJoined){
		    res.render('equipos.ejs', {
		      user : req.user, // Logged user
		      objectTeam: objectTeam,
		      objectJoined: objectJoined,
		      message: ""
		    });
		  });
    });
  });

  // Add new register
  app.post('/new-team',function(req,res,next){

	  var objTeam = new Team();

		objTeam.name 					= req.body.name;
		objTeam.members 			= req.body.members;
		objTeam.zone 					= req.body.zone;
		objTeam.municipality 	= req.body.municipality;
		objTeam.sport 	= req.body.sport;
		objTeam.category 	= req.body.category;
		
    
    objTeam.save(function (err) {
      if (err){
        console.log('Error creando objeto: '+err);
        res.redirect('/teams');
      } else {
        console.log('Objeto almacenado');
        res.redirect('/teams');
      }
    });
  });

  // Read object data
  app.get('/read-team/:id',function(req, res){
    var id = req.param("id");
    Team.findById(id, function(err, objTeam){
      if (err) {
        res.send('error');
      }
      else{
        res.send(objTeam);
      }
    });
  });

	// Update object data
	app.post('/update-team/:id', function(req, res, next){
		var id = req.param("id");

		Team.findById(id, function(err, objTeam){
			if (err) ;

			objTeam.name 					= req.body.name;
			objTeam.members 			= req.body.members;
			objTeam.zone 					= req.body.zone;
			objTeam.municipality 	= req.body.municipality;
			objTeam.sport 	= req.body.sport;
			objTeam.category 	= req.body.category;
		
			objTeam.save({_id:id}, function(err){
				if (err) {
					console.log("Error modificando objeto "+err);
					res.redirect("/teams");
				} else{
					console.log("Objeto modificado");
					res.redirect("/teams");
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
