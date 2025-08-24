const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URI;
let client;

async function connectDB() {
  if (!client) {
    client = new MongoClient(uri);
    try {
      await client.connect();
    } catch (err) {
      console.error("Connection failed:", err);
      process.exit(1);
    }
  }
  return client;
}

module.exports = connectDB;
