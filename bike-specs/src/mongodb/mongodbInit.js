/*
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
    console.log("spojeno")
  }
  clientPromise = global._mongoClientPromise
} 
else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
  console.log("spojeno")

}

export default clientPromise
*/