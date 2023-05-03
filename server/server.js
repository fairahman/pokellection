const express = require('express');
const path = require('path');
const APIController = require('./controller/APIController');
const app = express();
const PORT = 3000;
const userController = require('./controller/userController');


// app.use('/', express.static(path.join(__dirname,'')))

//handle parsing request body
app.use(express.json());

// app.get('/', APIController.call, APIController.instantiateTable, (req, res) => {
//   return res.status(200).send('random');
// });

// serves client request for a card
// handle post requests to the '/getpokemon' route
// it runs two middleware 'getData' and 'pokemonAPIQuery'
// they assign res.locals to an object which we check on line 28 for the property 'selectedPokemon'
// we then return res.locals.selectedPokemon back to the frontend

// app.post(
//   '/getPokemon',
//   APIController.getData,
//   APIController.pokemonAPIQuery,
//   (req, res) => {
//     // if the SQL database does not have the result, then redirect
//     console.log('ending the getPoke middleware');
//     if (Object.hasOwn(res.locals, 'selectedPokemon')) {
//       return res.status(200).json(res.locals.selectedPokemon);
//     } else {
//       return res.status(404).redirect('/');
//     }
//   }
// );

// this looks like a TEST

app.get('/allPokemon', APIController.getAllPokemon, (req, res) => {
  console.log('made a request to allPokemon');
  res.status(200).send(res.locals.allPokemon);
});

// this route is handling requests to POSTs toward /signup

app.post("/signup", userController.createUser, (req, res) => {
  console.log('IS THIS WOKING')
  res.status(200).send(res.locals.newUser);
})

// this route is handling requests to POSTs towrad /login 

app.post("/login", userController.getUser, (req, res) => {
  res.status(200).json(res.locals.truthy);
})


// global route error handler

app.use('*', (req, res) => {
  res.sendStatus(404);
});

// global error handler for the middleware

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler hiiiiii caught unknown middleware error',
    status: 400,
    message: { err: 'An error global occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('listening on a port:', PORT);
});
