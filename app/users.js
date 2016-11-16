var User = require('./models/user'); //Import database model

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    User.find({},function(err, objUser){
    res.render('users.ejs', {objUser:objUser});
  });
});

// MODULE Users
//ADD users
router.post('/new-user',function(req,res,next){

  var user = new User();

  user.joined   = req.body.joined;  
  user.name     = req.body.name;
  user.lastName = req.body.lastName;
  user.email    = req.body.email;
  user.password = req.body.password;
  user.role     = req.body.role;


    user.save(function (err) {
      console.log('err: '+err);
  });
    res.render('user/users');

});

//read user

router.get('/read-user/:id',function(req, res){
  var id =req.param("id");

  User.findById(id, function(err, objUser){
    if (err) {
      res.send('error');
    }
    else{
      res.send({objUser:objUser});
    }
  });
});

//update user

router.post('/update-user/:id', function(req, res, next){
  var id = req.param("id");

  User.findById(id, function(err, objUser){
    if (err) ;

    objUser.joined   = req.body.joined;  
    objUser.name     = req.body.name;
    objUser.lastName = req.body.lastName;
    objUser.email    = req.body.email;
    objUser.password = req.body.password;
    objUser.role     = req.body.role;

    objUser.save({_id:id}, function(err){
      if (err) {
        res.end('error');
      }
      else{
        res.send('success');
      }
    });        
  });
});
module.exports = router;
