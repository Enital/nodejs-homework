// const app = require('./app')

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })

const { MongoClient } = require("mongodb");

const DB_URI =
  "mongodb+srv://admin:yh0RoMOMdCwK2F4q@cluster4me.4o8rowx.mongodb.net/";

const client = new MongoClient(DB_URI);

async function main() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
