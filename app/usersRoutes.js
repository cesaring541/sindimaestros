var User = require('./models/user'); //Import database model

module.exports = function(app, passport) {

  app.get('/users', isLoggedIn, function(req, res, next) {
    if (req.user.role == "Administrador") {
      User.find({},function(err, objUser){
        res.render('users.ejs', {
          user : req.user, // Logged user
          objUser:objUser,
          message: ""
        });
      });
    } else {
      res.redirect('/joineds')
    }
  });

  // Add new register
  app.post('/new-user',function(req,res,next){

    var user = new User();

    user.joined       = req.body.joined;
    user.fullname     = req.body.fullname;
    user.email        = req.body.email;
    user.password     = user.generateHash(req.body.password);
    user.role         = req.body.role;
    user.municipality = req.body.municipality;

    user.save(function (err) {
      if (err){
        console.log('err: '+err);
      } else {
        console.log('Objeto almacenado');
        res.redirect('/users');
      }
    });
  });

  // Read object data
  app.get('/read-user/:id',function(req, res){
    var id = req.param("id");
    User.findById(id, function(err, objUser){
      if (err) {
        res.send('error');
      }
      else{
        res.send(objUser);
      }
    });
  });

  // Update object data
  app.post('/update-user/:id', function(req, res, next){
    var id = req.param("id");

    User.findById(id, function(err, objUser){
      if (err) throw err;

      objUser.joined        = req.body.joined;  
      objUser.fullname      = req.body.fullname;
      objUser.email         = req.body.email;
      //objUser.password = req.body.password;
      objUser.role          = req.body.role;
      objUser.municipality  = req.body.municipality;

      objUser.save({_id:id}, function(err){
        if (err) {
          console.log("Error arrojado: "+err);
          res.redirect("/users");
        }
        else{
          console.log("Objeto modificado exitosamente");
          res.redirect("/users");
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