var Joined = require('./models/joined'); //Import database model

module.exports = function(app, passport) {


app.get('/', function (req, res){

    Joined.aggregate([
        {
            $match:
            {
                gender : "",
                municipality:"",
                Zone:"",
                Teaching:"",
                typeOfAppointment:"",
                state:"",
                affiliationPaymentType:""
            }
        }       

    ],function (err,query) {
            if (err){
                res.send('error');
                console.log(err)
            }
            else{
                res.send(query)
                    
            }
    });
});

}
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
      return next();

  res.redirect('/login');
};
