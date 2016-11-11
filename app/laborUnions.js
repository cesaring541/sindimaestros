var Union = require('./models/laborUnion'); //Import database model

var express = require('express');
var router = express.Router();

router.get('/union/', function(req, res, next) {

    User.find({},function(err, objUnion){
    res.render('union/unions', {objUnion:objUnion});
  });
});

// MODULE labor union
//ADD labor union
router.post('/new-union',function(req,res,next){

  var union = new Union();


  union.boardType = req.body.boardType;
  union.joined    = req.body.joined;

  union.save(function (err) {
      console.log('err: '+err);
  });
    res.render('union/unions');

});

//read labor union

router.get('/read-union/:id',function(req, res){
  var id =req.param("id");

  Union.findById(id, function(err, objUnion){
    if (err) {
      res.send('error');
    }
    else{
      res.send({objUnion:objUnion});
    }
  });
});

//update labor union

router.post('/update-union/:id', function(req, res, next){
  var id = req.param("id");

  Union.findById(id, function(err, objUnion){
    if (err) ;

    objUnion.boardType = req.body.boardType;
    objUnion.joined    = req.body.joined;

    objUnion.save({_id:id}, function(err){
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
