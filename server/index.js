import 'dotenv/config'
import express from 'express'
import { MongoClient } from 'mongodb';

const app = express()
const port = 3000

const client = new MongoClient(process.env.MONGODB_URI)
await client.connect()


app.listen(port, () => {
  console.log(`\nServer running on http://localhost:${port}\n`)
})
