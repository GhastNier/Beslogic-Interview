const { MongoClient } = require('mongodb');

async function clientCall() {
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://ghastnier:268ab5J0EmXsbPHx@cluster0.glgdodb.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  await client.connect();
    const collection = await client.db("pokemon").collection("cards");
    let sample = collection.aggregate([{$sample: {size: 8}}])
    await client.close().then(r=>listDatabases(r));
  }

clientCall().catch(console.error);

//@TODO Cette section est non fonctionnelle il s'agit d'un premier jet.
async function listDatabases(client){
  const collection = await client.db("pokemon").collection("cards");
 let sample = await collection.aggregate([{$sample: {size: 8}}])
  console.log("Cards:");
  sample.forEach(_id => console.log(` - ${document.name}`));
}

