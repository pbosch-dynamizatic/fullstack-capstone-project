const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = 'giftdb';

let dbInstance;

async function connectToDatabase() {
  const client = new MongoClient(uri);

  // Task 1: Connect to MongoDB
  await client.connect();

  // Task 2: Connect to database giftdb and store in variable dbInstance
  dbInstance = client.db(dbName);

  // Task 3: Return the database instance
  return dbInstance;
}

module.exports = { connectToDatabase };