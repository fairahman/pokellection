const mongoose = require('mongoose');
const fetch = require('node-fetch');
const pokemon = require('pokemontcgsdk');
const akey = require('../controller/config');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  deck: { type: Array }
})

const cardSchema = new Schema({
  name: { type: String },
  level: { type: Number },
  hp: { type: Number },
  types: { type: Array },
  abilities: { type: Array },
  attacks: { type: Array },
  rarity: { type: String },
  images: { type: Object },
  price: { type: Schema.Types.Mixed }
})


pokemon.configure(akey);

const mongoUri = 'mongodb+srv://fairahman:04Z1ERiZNcjEwtt1@cluster0.jugte7i.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('connected to mongoDB')
  }
  catch (error) {
    console.log(error)
  }
}

connect();

// // THE API CALL IS COMMENTED OUT BELOW ON PURPOSE // NO NEED TO RE-RUN // 

async function apiCall() {
  try {
   const data = await fetch('https://api.pokemontcg.io/v2/cards/')
   const json = await data.json()
    // console.log(json)
   await  storeData(json.data);
  }
  catch {
    console.log('apiCall failed')
  };
}

apiCall();


// SAVING EACH POKEMON TO THE MONGO DB // 

 async function storeData(pokemons) {
 
  
    for (let pokemon of pokemons) {
      try { 
        if (pokemon.cardmarket === undefined)
        console.log('pokemon without price:', pokemon.name);
        await Card.create({
          name: pokemon.name,
          level: pokemon.level,  
          hp: pokemon.hp,
          types: pokemon.types,
          abilities: pokemon.abilities,
          attacks: pokemon.attacks,
          rarity: pokemon.rarity,
          images: pokemon.images,
          price: pokemon.cardmarket?.prices.trendPrice ?? --
        }) 
      }
      catch(error) {
        console.log('error saving pokemon: ', error);
      } 
    }
 }
  //   data.forEach(async function (pokemon) {
  //     await Card.create({
  //       name: pokemon.name,
  //       level: pokemon.level,
  //       hp: pokemon.hp,
  //       types: pokemon.types,
  //       abilities: pokemon.abilities,
  //       attacks: pokemon.attacks,
  //       rarity: pokemon.rarity,
  //       images: pokemon.images,
  //       price: pokemon.cardmarket.prices.trendPrice
  //     })
  //   })
  // }
  // catch (err) {
  //   console.log(err)
  // }
 



const User = mongoose.model('User', userSchema)
const Card = mongoose.model('Card', cardSchema)

module.exports = {
  User,
  Card
}