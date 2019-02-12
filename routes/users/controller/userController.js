const User = require('../model/User');

module.exports = {
    getAllUsers: (params) => {
       return new Promise((resolve, reject) => {
         //Find all the users
             //send data back to the where is requested 
                  //else 
            //if there's an error send the error message to the where is requested 
            User.find(params)
            .then(results => {
                resolve(results);
            })  
            .catch(error => {
                reject(error);
            });  
       });
    },
    createOneUser: (params) => {
        return new Promise((resolve, reject) => {

            //Find the user base on params to check if the user exist 
                //if the user exist, run the reject function with error message to notify
                //user already exist, sign up or sign in
            //else 
                //create new user
                //send user back to where is called    
            
        });
    }
}