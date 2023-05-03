const fetch = require('node-fetch');
const db = require('../models/pokemon_model');
const pokemon = require('pokemontcgsdk');
const akey = require('./config');
pokemon.configure(akey);

const APIController = {};

// calling the API

APIController.call = (req, res, next) => {
  fetch('https://api.pokemontcg.io/v2/cards/')
    .then((data) => data.json())
    .then((data) => {
      res.locals.pokemonData = data;
      return next();
    })
    .catch((err) => {
      const errorObj = {
        log: 'Pokemon data not fetched properly',
        status: 400,
        message: 'Uh oh! Your pokemon data was not fetched properly',
      };
      return next(errorObj);
    });
};

// loop though the first 100 responses from the API
// create an array of 100 elements, each element is a query
// then with queryDB they are looping thorough all of those elements 
// 

APIController.instantiateTable = (req, res, next) => {
  const data = res.locals.pokemonData.data;
  console.log('length: ', data.length);
  const newData = [];
  for (let i = 0; i < 100; i++) {
    str = `INSERT INTO pokemonTable (pokemon_name, pokemon_type, hp, marketPrice, updatedDate, img) VALUES ('${data[i].name}', '${data[i].types[0]}',${data[i].hp}, ${data[i].cardmarket.prices.averageSellPrice}, '${data[i].cardmarket.updatedAt}', '${data[i].images.small}')`;
    newData.push(str);
  }
  async function queryDB(arr) {
    for (const el of arr) {
      try {
        await db.query(el);
      } catch {
        console.log(el);
        continue;
      }
    }
  }
  queryDB(newData);
  return next();
};

// check if the selected pokemon exists in the res.locals object
// if res locals does not contain selected Pokemon, return error

APIController.pokemonAPIQuery = (req, res, next) => {
  // if the response doesn't yet have the result
  if (!Object.hasOwn(res.locals, 'selectedPokemon')) {
    console.log('SQL attempt', req.body.name);
    // console.log('API querying the api for', req.body.name);
    pokemon.card
      .where({ q: `name:${req.body.name}` })
      .then((result) => {
        // TODO: improve filtering to get different editions
        // currently taking the first result from the API response
        if (result.data[0]) {
          let r = result.data[0];
          const data = {
            name: r.name,
            types: r.types,
            hp: r.hp,
            cardmarket: r.cardmarket,
            images: r.images,
          };

          // assign it to res.locals.selectedPokemon
          res.locals.selectedPokemon = data;

          // update the db to include the new data
          try {
            const qstr = `INSERT INTO pokemonTable (pokemon_name, pokemon_type, hp, marketPrice, updatedDate, img) VALUES ('${data.name}', '${data.types[0]}',${data.hp}, ${data.cardmarket.prices.averageSellPrice}, '${data.cardmarket.updatedAt}', '${data.images.small}')`;
            console.log(qstr);
            db.query(qstr).then((d) => console.log(d));
            // .catch((d) => console.log(d));
          } catch (err) {
            console.log(err);
          }
        } else {
          // not an error, but there's no result at db
          return next({
            message: 'error in API request',
            log: 'error in the API req',
          });
        }
        next();
      })
      .catch((err) => {
        console.log(err);
        next({
          ...err,
          message: 'error in API request',
          log: 'error in the API req',
        });
      });
  } else {
    next();
  }
};

// deconstructing the request body.name
// query SQL db with the varible in 'str'
// not sure what 'ILIKE' is doing in the sql query
// then this string is passed into 'db.query' ... 
// then the promise chain is being handled afterward and we return 'data.rows[0]'
// then we build an object by assinging the result of the query to properties
// then saved to res.locals as 'selected pokemon' property

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
