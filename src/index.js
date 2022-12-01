import express from "express";
import {MongoClient} from "mongodb";
import cors from "cors"

import dotenv from "dotenv"
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("Mongo Online");
} catch (err) {
  console.log(err);
}

const app = express();
app.use(express.json());
app.use(cors());

app.listen(5000, ()=> console.log("Running in port:5000"));