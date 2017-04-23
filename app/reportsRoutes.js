var Joined = require('./models/joined'); //Import database model

var json2csv = require('json2csv');
var fs = require('fs');

module.exports = function(app, passport) {


  app.get('/reports', function (req, res){
  	if (req.user.role == "Administrador") {
        Joined.find({},function(err, objJoined){
          console.log(objJoined)
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
    municipalitySearch = (req.body.municipality);
    var first = [];
    if (req.user.role == "Administrador") {
      Joined.find({municipalityWorking: municipalitySearch},function(err, objJoined){
        for (var i = 0; i < objJoined.length; i++){
           var fields = ['Nombre', 'Identificacion', 'Municipio', 'Tipo de nombramiento', 'Nivel','Decreto','Estado'];
           var myData3 = [
              {
                  "Nombre": objJoined[i].fullName,
                  "Identificacion": objJoined[i].identityCard,
                  "Municipio": objJoined[i].municipalityWorking,
                  "Tipo de nombramiento": objJoined[i].typeOfAppointment,
                  "Nivel":objJoined[i].level,
                  "Decreto":objJoined[i].Teaching,
                  "Estado":objJoined[i].state
              }
          ];
          first.push(myData3);
        }
        var csv = json2csv({ data: myData3, fields: fields });
            fs.writeFile('./public/reportes/Afiliados-por-municipio.csv', csv, function(err) {
                if (err) throw err;
                res.send('true');
            })
        });       
    }else {
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
