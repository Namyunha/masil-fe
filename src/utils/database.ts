import { MongoClient } from 'mongodb';

// Replace the following with your Atlas connection string
const uri = process.env.DATABASE_URL;
export const dbClient = new MongoClient(uri);

export async function findUserList() {
  try {
    // Connect to the Atlas cluster
    await dbClient.connect();
    // Get the database and collection on which to run the operation
    const db = dbClient.db('masil');
    const col = db.collection('user');
    const document = await col.find().toArray();
    // Print results
    console.log('Document found:\n' + JSON.stringify(document));
  } catch (err) {
    console.log(err.stack);
  } finally {
    await dbClient.close();
  }
}

export async function registerUser(newItem) {
  console.log('newItem = ', newItem);
  try {
    // Connect to the Atlas cluster
    await dbClient.connect();
    // Get the database and collection on which to run the operation
    const db = dbClient.db('masil');
    const col = db.collection('user');

    const document = await col
      .insertOne(newItem)
      .then((result) =>
        console.log(`Successfully inserted item with _id: ${result.insertedId}`)
      )
      .catch((err) => console.error(`Failed to insert item: ${err}`));
    // Print results
    console.log('Document found:\n' + JSON.stringify(document));
  } catch (err) {
    console.log(err.stack);
  } finally {
    await dbClient.close();
  }
}
