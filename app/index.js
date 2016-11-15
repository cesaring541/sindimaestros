//var User = require('./models/user'); //Import database model

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    //User.find({},function(err, objUser){
    res.render('index.ejs');
  //});
});


module.exports = router;
