const User = require('../model/User');
const errorMessage = require('../utils/errorMessage');

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
										email: params.email,
										gender: params.gender,
										city: params.city,
										state: params.state,
										zipcode: params.zipcode,
										age: params.age,
										likes: params.likes,
										hobbies: params.hobbies,
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
		updateUserByID: (id, params) => {

			return new Promise((resolve, reject) => {

				//Find user by ID. If the user exist
					//we insert the new data and set new to true in the option argument 
				//else 
					//if user does not exist we reject and show error message 'User does not exist'

					User.findByIdAndUpdate({_id: id}, params, {new: true})
							.then(result => {
								resolve(result);
							})
							.catch(error => {
                let errors = errorMessage.noUserFound();
								reject(errors);
							});
				
			});

		},
		deleteUserByID: (id) => {
				//deleteByID wrap this function with a Promise
				//Use the Mongoose method findByIdandDelete 
					//if successfully deleted the user 
						//send a message tell the user the target is deleted 
					//else 
				//tell the user the target does not exist	
			return new Promise((resolve, reject) => {

				User.findByIdAndDelete(id)
						.then(result => {
							let successObj = {}
							successObj.message = `User with ID: ${id} has been deleted`;
							successObj.confirmation = "Success";
							resolve(successObj);
						})
						.catch(error => {
              let errors = errorMessage.noUserFound();
							reject(errors);
						})

			});

		},
		addOneToLikesByID: (id) => {
				//write a method addonetolikes
			//write return a promise
			//find a user by ID 
			//if user exist 
				//grab the likes and add one to it
				//and add one to likes 
			//else 
				//send error message back - "User does not exist"
			return new Promise((resolve, reject) => {

				User.findOneAndUpdate({ _id: id }, { $inc: {likes: 1 }}, {new: true})
					.then(result => {
						resolve(result);
					})
					.catch(error => {
						let errors = errorMessage.noUserFound();
						reject(errors);
					})


				// User.findById(id)
				// 	.then(user => {
						// const updatedLikesVar = user.likes + 1;

						// user.likes = updatedLikes;

						// user.save()
						// 	.then(result => {
						// 		console.log(result);
						// 		resolve(result)
						// 	})
						// 	.catch(error => {
						// 		console.log(error)
						// 		reject(error)
						// 	});

						// let updatedLikes = {
						// 	likes: updatedLikesVar
						// }

						// User.findByIdAndUpdate({_id: id},updatedLikes, {new: true})
						// 	.then(result => {
						// 		resolve(result);
						// 	})
						// 	.catch(error => {
						// 		reject(error);
						// 	})

					// })
					// .catch(error => {
					// 	let errors = {};
					// 	errors.message = 'From Catch: User does not exist';
					// 	errors.status = 400;
					// 	reject(errors);
					// })

			});


		},
		getUserByAge: (age) => {
					//getUserByAge 
		//find user age under 25
		//if users exist 
			//sends it back to where the function is called 
		//else 
			//tell users recorsd does not exist
			return new Promise((resolve, reject) => {
				
				User.find({age: {
					$lt: age
				}})
				.then(users => {

					if (users.length === 0) {
						let errors = errorMessage.noUserFound();
						reject(errors);
					}

					resolve(users)
				})
				.catch(error => {
				  let errors = errorMessage.noUserFound();
					reject(errors);
				});
			});
		}, 
		getUsersByHobbies: (hobbiesObj) => {
      
      let hobbiesArray = hobbiesObj.hobbies;

      let resultsArray = [];

      hobbiesArray.forEach(hobbies => {
        let dataObj = {};
        dataObj.hobbies = hobbies;
        resultsArray.push(dataObj);
      });

      console.log(resultsArray)
    
      // for(let key in hobbiesObj) {
      //   let dataObj = {}
      //   dataObj.hobbies = hobbiesObj[key];
      //   queryArray.push(dataObj)
      // }
      // console.log(queryArray)
			return new Promise((resolve, reject) => {
        User.find({
          $and: [
            {
              $or: resultsArray
            }
          ]
        })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        })


				// User.find({})
				// .then(users => {
				// let userArray = [];
				// users.forEach(user => {
				// 		  user.hobbies.map(userHobbies => {
				// 			if (userHobbies === hobbies) {
				// 				userArray.push(user);
				// 			}
				// 		})
				// 		return userArray;
        //   });
          
        //   if (userArray.length === 0) {
        //     let errors = errorMessage.noUserFound();
        //     reject(errors);
        //   }

				// 	resolve(userArray)
				// })
				// .catch(error => {
				// 	let errors = errorMessage.noUserFound();
				// 	reject(errors);
				// })


			});

		}
		//getUsersByHobbies
		//loop through the entire User documents
			//extract the hobbies
			//find if the hobbies matches the input hobbies
			//set the found user to an array
		//else 
			//no matched hobbies found
}