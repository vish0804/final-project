const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://vish0804:Sunil088@cluster0.rz1xp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

module.exports = {client}