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
