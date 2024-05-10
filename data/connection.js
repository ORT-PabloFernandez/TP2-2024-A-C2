// mongodb+srv://admin:@cluster0.3bm3a.azure.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import "dotenv/config";
import { MongoClient } from "mongodb";
const uri = process.env.MONGODB;

const client = new MongoClient(uri);

let instance = null;

export default async function getConnection() {
  if (instance == null) {
    try {
      instance = await client.connect();
    } catch (error) {
      console.log(err.message);
    }
  }
  return instance;
}
