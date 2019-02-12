var express = require('express');
var router = express.Router();
var userController = require('./controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('HELLO HAMSTERS');
});

router.get('/getallusers', function(req, res) {

  //call userController getAllusers function to get all the users 
    //if is in the then block, we sends the data back to where is requested 
      //else 
    //we send back the error with 400 status code  

  userController.getAllUsers({})
                .then(results => {
                  res.json(results);
                })
                .catch(error => {
                  res.status(400).json(error);
                });

});

module.exports = router;
