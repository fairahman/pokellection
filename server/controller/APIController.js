const { Card } = require('../models/all_models.js')

const APIController = {};


// deconstructing the request body.name
// query SQL db with the varible in 'str'
// not sure what 'ILIKE' is doing in the sql query
// then this string is passed into 'db.query' ... 
// then the promise chain is being handled afterward and we return 'data.rows[0]'
// then we build an object by assinging the result of the query to properties
// then saved to res.locals as 'selected pokemon' property

APIController.getAllPokemon = async (req, res, next) => {
  const allPokemon = await Card.find({})
  res.locals.allPokemon = allPokemon
  return next()
}

APIController.getData = (req, res, next) => {
  const name = req.body.name;
  console.log('name is currently: ', name);
  const str = `SELECT * FROM pokemonTable WHERE pokemon_name ILIKE '${name}'`;
  db.query(str)
    //.then(data => console.log(data))
    .then((data) => {
      // console.log('the data', data.rows[0]);
      return data.rows[0];
    })
    .then((data) => {
      // console.log('DATA: ', data);
      const dataSample = {
        name: data.pokemon_name,
        types: [data.pokemon_type],
        hp: data.hp,
        cardmarket: {
          updatedAt: data.updateddate,
          prices: {
            averageSellPrice: data.marketprice,
          },
        },
        images: {
          small: data.img,
        },
      };
      res.locals.selectedPokemon = dataSample;
      console.log('log this: ', res.locals.selectedPokemon);
      return next();
    })
    .catch((err) => {
      const errorObj = {
        log: 'Couldnt get this pokemon',
        status: 400,
        message: 'Uh oh! Couldnt get this pokemon',
      };
      console.log('redirecting to API req instead');
      next();
    });
};

module.exports = APIController;
