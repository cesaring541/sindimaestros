var Joined = require('./models/joined'); //Import database model

var json2csv = require('json2csv');
var fs = require('fs');

module.exports = function(app, passport) {


  app.get('/reports', function (req, res){  	
    Joined.find({},function(err, objJoined){
      res.render('reportes.ejs', {
        user : req.user, // Logged user
        message: ""
      });
    });      
  });
  app.post('/search-reports', function (req, res){
    var municipalitySearch = (req.body.municipality);
    var first = [];
    var csv;    
    Joined.find({municipalityWorking: municipalitySearch},function(err, objJoined){
      for (var i = 0; i < objJoined.length; i++){
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
        var csv1 = json2csv({ data: first[i]});
        csv = csv1 + csv;
      }
      console.log(csv)
      fs.writeFile('./public/reportes/Afiliados-por-municipio.csv', csv, function(err) {
          if (err) throw err;
          res.send('true');
      });
    });    
  });

  app.post('/search-reports-gender', function (req, res){

    var municipalitySearch = (req.body.municipality);
    var gender = (req.body.gender);
    var first = [];
    var csv;    
    Joined.find({municipalityWorking: municipalitySearch, gender: gender},function(err, objJoined){
      for (var i = 0; i < objJoined.length; i++){
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
        var csv1 = json2csv({ data: first[i]});
        csv = csv1 + csv;
      }
          fs.writeFile('./public/reportes/Afiliados-por-genero.csv', csv, function(err) {
              if (err) throw err;
              res.send('true');
          })
      });
  });

  app.post('/search-reports-sel_Teaching', function (req, res){
    
    var municipalitySearch = (req.body.municipality);
    var Teaching = (req.body.Teaching);
    var first = [];
    var csv;     
    Joined.find({municipalityWorking: municipalitySearch, Teaching: Teaching},function(err, objJoined){
      for (var i = 0; i < objJoined.length; i++){
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
        var csv1 = json2csv({ data: first[i]});
        csv = csv1 + csv;
      }
      fs.writeFile('./public/reportes/Afiliados-por-decreto.csv', csv, function(err) {
        if (err) throw err;
          res.send('true');
        })
      });
  });
    app.post('/search-reports-paymentType', function (req, res){
   
    var municipalitySearch = (req.body.municipality);
    var affiliationPaymentType = (req.body.affiliationPaymentType);
    var first = [];
    var csv;  
    Joined.find({municipalityWorking: municipalitySearch, affiliationPaymentType: affiliationPaymentType},function(err, objJoined){
      for (var i = 0; i < objJoined.length; i++){
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
        var csv1 = json2csv({ data: first[i]});
        csv = csv1 + csv;
      }
      fs.writeFile('./public/reportes/Afiliados-por-pago.csv', csv, function(err) {
              if (err) throw err;
              res.send('true');
          })
      });
  });
}
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
      return next();

  res.redirect('/login');
};
