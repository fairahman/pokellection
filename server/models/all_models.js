const mongoose = require('mongoose');
const fetch = require('node-fetch');
const pokemon = require('pokemontcgsdk');
const akey = require('../controller/config');
pokemon.configure(akey);

const mongoUri = 'mongodb+srv://rhaasti:QJ3E8Zv6SFL3TZBj@cluster0.ktltxyg.mongodb.net/?retryWrites=true&w=majority';

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

// THE API CALL IS COMMENTED OUT BELOW ON PURPOSE // NO NEED TO RE-RUN // 

// async function apiCall() {
//   try {
//     const data = await fetch('https://api.pokemontcg.io/v2/cards/')
//     const jsonData = await data.json()
//     console.log(jsonData)
//     storeData(jsonData.data);
//   }
//   catch {
//     console.log('apiCall failed')
//   };
// }

// apiCall();


// SAVING EACH POKEMON TO THE MONGO DB // 

// function storeData(data) {

//   try {
//     data.forEach(async function (element) {
//       await Card.create({
//         name: element.name,
//         level: element.level,
//         hp: element.hp,
//         types: element.types,
//         abilities: element.abilities,
//         attacks: element.attacks,
//         rarity: element.rarity,
//         images: element.images,
//         price: element.price
//       })
//     })
//   }
//   catch (err) {
//     console.log(err)
//   }
// }


const Schema = mongoose.Schema

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
  price: { type: Number }
})

const User = mongoose.model('User', userSchema)
const Card = mongoose.model('Card', cardSchema)


module.exports = {
  User,
  Card
}