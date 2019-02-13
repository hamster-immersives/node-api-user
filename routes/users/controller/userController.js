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
            User
							.findOne({email: params.email})
							.then(user => {

								if (user) {
									let errors = {};
									errors.message = 'Email Already Exist';
									errors.status = 409;
									reject(errors)
								} else {

									const newUser = new User({
										firstName: params.firstName,
										lastName: params.lastName,
										email: params.email,
										password: params.password,
										gender: params.gender,
										address: params.address,
										city: params.city,
										state: params.state,
										zipcode: params.zipcode,
										dob: params.dob,
										occupation: params.occupation
									})
									
									newUser	
										.save()
										.then(user => resolve(user))
										.catch(error => reject(error));
								}
							})
							.catch(error => {
								console.log(error)
								reject(error)
							});


					// const newUser = new User({
					// 	firstName: params.firstName,
					// 	lastName: params.lastName,
					// 	email: params.email,
					// 	password: params.password,
					// 	gender: params.gender,
					// 	address: params.address,
					// 	city: params.city,
					// 	state: params.state,
					// 	zipcode: params.zipcode,
					// 	dob: params.dob,
					// 	occupation: params.occupation
					// })

					// newUser	
					// 	.save()
					// 	.then(user => {
					// 		resolve(user)
					// 	})
					// 	.catch(error => {		
					// 		if(error.code === 11000) {
					// 			let errorObj = {}
					// 			errorObj.status = 400;
					// 			errorObj.message = 'Email Already Exist - Please Choose Another One';
					// 			reject(errorObj)
					// 		}
					// 	});
								
        });
		},
		findUserByID: (id) => {
			return new Promise((resolve, reject) => {

				// Find user by ID (check if find user by ID function exist)
				// if user exist sends it back where the function is called
					//else 
				//	Send erorr message doesn't exist and go sign up. 
					User.findById({_id: id})
							.then(result => {
								resolve(result);
							})
							.catch(error => {
								reject(error);
							})

			});
		},
		updateUserByID: (params) => {

			return new Promise((resolve, reject) => {

				//Find user by ID. If the user exist
					//we insert the new data and set new to true in the option argument 
				//else 
					//if user does not exist we reject and show error message 'User does not exist'
				
			});

		}
}