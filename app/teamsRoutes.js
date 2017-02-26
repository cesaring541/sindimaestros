var Team = require('./models/team'); //Import database model
var Joined = require('./models/joined');

var moment = require('moment');

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

		objTeam.name				= req.body.sport+" "+req.body.municipality;
		objTeam.gender 				= req.body.gender;
		objTeam.typeOfParticipation	= req.body.typeOfParticipation;
		objTeam.members				= req.body.members;
		objTeam.zone				= req.body.zone;
		objTeam.municipality 		= req.body.municipality;
		objTeam.sport				= req.body.sport;
		objTeam.category 			= req.body.category;
		
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
		Team.findById(id, function(err, team){
			if (err) {
				res.send('error');
			}
			else{
				res.send(team);
			}
		});
	});

	// Update object data
	app.post('/update-team/:id', function(req, res, next){
		var id = req.param("id");

		Team.findById(id, function(err, team){
			if (err) ;

			team.name					= req.body.sport+" "+req.body.municipality;
			team.gender 				= req.body.gender;
			team.typeOfParticipation	= req.body.typeOfParticipation;
			team.members				= req.body.members;
			team.zone					= req.body.zone;
			team.municipality 			= req.body.municipality;
			team.sport					= req.body.sport;
			team.category 				= req.body.category;
		
			team.save({_id:id}, function(err){
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

	// List joineds participants based in Municipality, Gender and Category
	app.get('/list-joineds/:Mun/:Gen/:Cat',function(req, res){
		var mun = req.param("Mun");
		var gen = req.param("Gen");
		var cat = req.param("Cat");
		var filteredJoineds = [];

		if (gen != "Mi") { // Si el género seleccionado es masculino o femenino
			var age = 0;
			
			Joined.find({ $and: [{municipality: mun},{gender: gen}] }, 'identityCard fullName birthdate gender municipality', function(err, joineds){
				for (joined in joineds) {

					age = moment().diff(joineds[joined].birthdate, 'years');
					
					if (cat == 'A' && age > 0 && age <= 30) {
						filteredJoineds.push(joineds[joined]);
					} else if (cat == 'B' && age > 30 && age <= 40) {
						filteredJoineds.push(joineds[joined]);
					} else if (cat == 'C' && age > 40 && age <= 50) {
						filteredJoineds.push(joineds[joined]);
					} else if (cat == 'D' && age > 50) {
						filteredJoineds.push(joineds[joined]);
					}
				};

				setTimeout(function() {
					if (err) {
						res.send('error');
					}
					else{
						res.send(filteredJoineds);
					}
				}, 1000);
			});
		} else { // Si el género seleccionado es mixto
			var age = 0;
			
			Joined.find({ $and: [{municipality: mun}] }, 'identityCard fullName birthdate gender municipality', function(err, joineds){
				for (joined in joineds) {

					age = moment().diff(joineds[joined].birthdate, 'years');
					
					if (cat == 'A' && age > 0 && age <= 30) {
						filteredJoineds.push(joineds[joined]);
					} else if (cat == 'B' && age > 30 && age <= 40) {
						filteredJoineds.push(joineds[joined]);
					} else if (cat == 'C' && age > 40 && age <= 50) {
						filteredJoineds.push(joineds[joined]);
					} else if (cat == 'D' && age > 50) {
						filteredJoineds.push(joineds[joined]);
					}
				};

				setTimeout(function() {
					if (err) {
						res.send('error');
					}
					else{
						res.send(filteredJoineds);
					}
				}, 1000);

			});
		}
	});
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	if (req.isAuthenticated())
		return next();

	res.redirect('/login');
};
