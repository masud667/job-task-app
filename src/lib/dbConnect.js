import { MongoClient, ServerApiVersion }  from 'mongodb';

export default function dbConnect(collectionName){
const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASS;
const dbName = process.env.MONGODB_DB;

const uri = `mongodb+srv://${user}:${password}@cluster0.cdz9cop.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
return client.db(dbName).collection(collectionName)
}
