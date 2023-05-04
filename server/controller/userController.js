const { User } = require('../models/all_models.js');
const bcrypt = require('bcryptjs');


const SALT_WORK_FACTOR = 10;



const userController = {};

// this is where we add some tastyy salt
// deconstruct the request body to have two variables named 'username' and 'password'
// using bcrypt we are hashing and storing the user to their MONGO database
// we're setting res.locals.newUser to the returned data which is likely the new user

userController.createUser = (req, res, next) => {
    console.log("createUser middleware")
    const { username } = req.body;
    let { password } = req.body;
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            User.create({ username: username, password: hash })
                .then(data => {
                    res.locals.newUser = data;
                    console.log("data", data)
                    return next();
                })
                .catch(err => {
                    const errObj = {
                        log: 'Error occurred in user.create',
                        status: 400,
                        message: 'Error occurred'
                    };
                    return next(errObj);
                })
        })
    })
}


userController.savePokemon = async (req, res, next) => {
    console.log('in the save')
    const { pokemonToSave } = req.body
    // findoneandupdate // find the current user's object and push the clicked pokemon into their 'deck' array
    try {
        console.log('in the try')
        res.locals.savedPokemon = await User.findOneAndUpdate({ _id: '6453bd4918e98d00e06e87d7' }, { $push: { "deck": { pokemonToSave } } })
    }
    catch (err) {
        console.log(err)
        next(err)
    }
}

// we are sending a findOne request with the username pulled from the request body to the MONGO database


userController.getUser = (req, res, next) => {
    //const { username } = req.body;
    console.log("before user find one")
    console.log("req body: ", req.body)
    User.findOne({ username: req.body.username })/*, (err, result) => {*/
        .then(async (results) => {
            console.log("results", results)
            const passwordMatch = await bcrypt.compare(req.body.password, results.password);
            console.log('PASSWORD MATCH: ', passwordMatch);
            res.locals.truthy = passwordMatch;
            return next();
        })
        .catch((err) => {
            console.log('THIS IS THE ERROR: ', err);
            const errObj = {
                log: 'AN ERROR IN THE usercontroller.getuser',
                status: 400,
                message: { err: "chill" },
            };
            return next(errObj);
        });
}


module.exports = userController;