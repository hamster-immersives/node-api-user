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

router.put('/updateuserbyid/:id', function(req, res) {

  //userController.updateUserByID 
    //if successfully updated user we sends it back where it was called 
      //else
    //send error message that user does not exist

  userController.updateUserByID(req.params.id, req.body)
                .then(result => {
                  res.json(result)
                })
                .catch(error => {

                  let errors = {}
                  errors.message = error.message;

                  res.status(error.status).json(errors);
                });

});

router.delete('/deleteuserbyid/:id', function(req, res) {

  //set up delete router
//give the router a path name deleteuserbyid /deleteuserbyid and ID params /:id = /deleteuserbyid/:id

//inside the code body 
// userController give it a method call deleteUserByID passing in ID = req.params.id 
  //if success
    //tell user the target has been deleted 
  //else 
    //tell user the target does not exist  


  userController.deleteUserByID(req.params.id)
                .then(result => {
                  res.json(result);
                })
                .catch(error => {
                  let errors = {}
                  errors.message = error.message;
                  res.status(error.status).json(errors);
                })

});


router.post('/addonetolikes/:id', function(req, res) {

  userController.addOneToLikesByID(req.params.id)
                .then(result => {
                  res.json(result);
                })
                .catch(error => {
                  let errors = {}
                  errors.message = error.message;
                  res.status(error.status).json(errors);
                });


});

// router.put('/addonetolikes/:id', function(req, res) {

//   userController.addOneToLikesByID(req.params.id)
//                 .then(result => {
//                   res.json(result);
//                 })
//                 .catch(error => {
//                   let errors = {}
//                   errors.message = error.message;
//                   res.status(error.status).json(errors);
//                 });


// });

// router.get('/addonetolikes/byid', function(req, res) {

//   userController.addOneToLikesByID(req.query.id)
//                 .then(result => {
//                   res.json(result);
//                 })
//                 .catch(error => {
//                   let errors = {}
//                   errors.message = error.message;
//                   res.status(error.status).json(errors);
//                 });
// });


//set up a post router
//name it /addonetolikes/:id
  //create a method in the userController addonetolikes
  //if user exist add one to likes
    //else 
  //send error message back "User does not exist" 

//==========================================================

//set a get router
//get user by age /getuserbyage?age=

//inside the route 
  //create a user method userController. getUserByAge
    //if is in the 'then block' sends it back to where the function is called
  //else
    //if is in the 'catch block' sends it back with error message 

router.get('/getuserbyage', function(req, res) {
  userController.getUserByAge(req.query.age)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      let errors = {}
      errors.message = error.message;
      res.status(error.status).json(errors);
    });

})

router.get('/getusersbyhobbies', function(req, res) {
  
  if (Object.keys(req.query).length === 0 ) {
    res.status(400).send('You need to have an query');
    return;
  }

  userController.getUsersByHobbies(req.query)
                .then(result => {
                  res.json(result);
                })
                .catch(error => {
                  let errors = {}
                  errors.message = error.message;
                  res.status(error.status).json(errors);
                })

});

//a get path - getusersbyhobbies 
//userController.getUsersByHobbies
//if success sends the object back to where is called
  //else
//sends the error message back to where is called

module.exports = router;
