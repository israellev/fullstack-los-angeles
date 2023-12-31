// db.js
const { MongoClient } = require('mongodb');

//password - Xr8ew481wpvFTVpz
const uri = 'mongodb+srv://storeUser:Xr8ew481wpvFTVpz@cluster0.2i5a2pb.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let database;

async function connectToDatabase() {
  try {
    await client.connect();
    database = client.db();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

function getDatabase() {
  return database;
}

module.exports = { connectToDatabase, getDatabase };
