// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // const MONGO_URI: 'mongodb+srv://yangyohan1:9Ev7mpUpSgDm6K78@cluster0.kiof2xb.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect('mongodb+srv://yangyohan1:9Ev7mpUpSgDm6K78@cluster0.kiof2xb.mongodb.net/?retryWrites=true&w=majority', { useNewURLParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//     console.log('Connected to database')
// })

// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

// const userSchema = new Schema({
//     username: {type: String, required: true, unique: true},
//     password: {type: String, required: true},
// })

// module.exports = mongoose.model('User', userSchema);