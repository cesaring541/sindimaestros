var Union = require('./models/laborUnion'); //Import database model

module.exports = function(app, passport) {

  app.get('/laborUnions', isLoggedIn, function(req, res, next) {
    Union.find({},function(err, objUnion){
      res.render('sindicato.ejs', {
        user : req.user, // Logged user
        objUnion: objUnion,
        message: ""
      });
    });
  });

  // Add new register
  app.post('/new-union',function(req,res,next){

    var union = new Union();
    union.boardType = req.body.boardType;
    union.joined    = req.body.joined;

    union.save(function (err) {
      if (err){
        console.log('err: '+err);
      } else {
        console.log('Objeto almacenado');
        res.redirect('/unions');
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

