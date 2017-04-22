var Joined = require('./models/joined'); //Import database model

module.exports = function(app, passport) {


app.get('/reports', function (req, res){
  console.log(req.data)
	if (req.user.role == "Administrador") {
      Joined.find({},function(err, objJoined){
        res.render('reportes.ejs', {
          user : req.user, // Logged user
          message: ""
        });
      });
    } else {
      res.redirect('/reports')
    }
});
app.post('/search-reports', function (req, res){
  console.log(req.data)
  if (req.user.role == "Administrador") {
      Joined.find({},function(err, objJoined){
        res.render('reportes.ejs', {
          user : req.user, // Logged user
          message: ""
        });
      });
    } else {
      res.redirect('/reports')
    }
});
}
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
      return next();

  res.redirect('/login');
};
