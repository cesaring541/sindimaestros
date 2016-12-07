var Union = require('./models/laborUnion'); //Import database model
var Joined = require('./models/joined');
var Affiliation = require('./models/affiliation');


module.exports = function(app, passport) {

  app.get('/laborUnions', isLoggedIn, function(req, res, next) {
    Union.find({},function(err, objUnion){
      Joined.find({},function(err, objJoined){
        res.render('sindicato.ejs', {
          user : req.user, // Logged user
          objUnion: objUnion,
          objJoined: objJoined,
          message: ""
        });
      });     
    });
  });

  // Add new register
  app.post('/new-affiliation',function(req,res,next){
    console.log(req.body)
    var affiliation = new Affiliation();

    console.log("req.body.userID: "+req.body.userID);
    console.log("req.body.unionID: "+req.body.unionID);
    console.log("req.body: "+req.body);

    affiliation.userID = req.body.userID;
    affiliation.unionID    = req.body.unionID;

    affiliation.save(function (err) {
      if (err){
        console.log('err: '+err);
      } else {
        console.log('Objeto almacenado');
        res.redirect('/laborUnions');
      }
    });
  });

  // Read object data
  app.get('/read-union/:id',function(req, res){
    var id = req.param("id");
    Union.findById(id, function(err, objUnion){
      if (err) {
        res.send('error');
      }
      else{
        res.send(objUnion);
      }
    });
  });

  // Update object data
  app.post('/update-union/:id', function(req, res, next){
    var id = req.param("id");

    Union.findById(id, function(err, objUnion){
      if (err) ;

      objUnion.boardType = req.body.boardType;
      objUnion.joined    = req.body.joined;

      objUnion.save({_id:id}, function(err){
        if (err) {
          res.redirect("/laborUnions");
        }
        else{
          res.redirect("/laborUnions");
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

