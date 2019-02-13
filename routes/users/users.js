var express = require('express');
var router = express.Router();
var userController = require('./controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('HAMSTER ADDRESS');
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

router.post('/createuser', function(req, res) {

  userController.createOneUser(req.body)
                .then(result => {
                  res.json(result);
                })
                .catch(error => {
                  let errorObj = {};
                  errorObj.message = error.message;
                  res.status(error.status).json(errorObj);
                });

});

// router.get('/getuserbyid/:id', function(req, res) {

//   userController.findUserByID(req.params.id)
//                 .then(result => {
//                   res.json(result);
//                 })
//                 .catch(error => {
//                   res.status(400).json(error)
//                 })

// });

router.get('/getuserbyid', function(req, res) {

  userController.findUserByID(req.query.id)
                .then(result => {
                  res.json(result);
                })
                .catch(error => {
                  res.status(400).json(error)
                })

});

module.exports = router;
