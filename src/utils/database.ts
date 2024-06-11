import { MongoClient } from 'mongodb';
import { dbUserData } from '@/types/user';

// Replace the following with your Atlas connection string
const uri = process.env.DATABASE_URL as string;

export const dbClient = new MongoClient(uri);

const connectDB = async () => {
  // Connect to the Atlas cluster
  await dbClient.connect();
  // Get the database and collection on which to run the operation
  const db = dbClient.db('masil');
  const col = db.collection('user');
  return col;
};

export async function findUser(searchEmail: string) {
  try {
    const col = await connectDB();
    const document = await col.findOne({ email: searchEmail });
    // Print results
    // console.log('Document found:\n' + JSON.stringify(document));
    return document;
  } catch (err) {
    console.log(err);
  } finally {
    await dbClient.close();
  }
}

export async function registerUser(newItem: dbUserData) {
  try {
    const col = await connectDB();
    const document = await col
      .insertOne(newItem)
      .then((result) =>
        console.log(`Successfully inserted item with _id: ${result.insertedId}`)
      )
      .catch((err) => console.error(`Failed to insert item: ${err}`));
    // Print results
    console.log('Document found:\n' + JSON.stringify(document));
  } catch (err) {
    console.log(err);
  } finally {
    await dbClient.close();
  }
}
