import { MongoClient } from 'mongodb';
import { dbUserData } from '@/types/user';

// Replace the following with your Atlas connection string
const uri = process.env.DATABASE_URL as string;

export const dbClient = new MongoClient(uri);

const connectDB = async () => {
  await dbClient.connect();
  const db = dbClient.db('masil');
  const col = db.collection('user');
  return col;
};

export async function findUser(searchEmail: string) {
  try {
    const col = await connectDB();
    const document = await col.findOne({ id: searchEmail });
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
    console.log('Document found:\n' + JSON.stringify(document));
  } catch (err) {
    console.log(err);
  } finally {
    await dbClient.close();
  }
}

export async function updateUser(id, data) {
  try {
    const col = await connectDB();
    const query = { id };
    const update = { $set: data };
    const options = { upsert: true };
    console.log('query = ', query, ' update = ', update);
    await col
      .updateOne(query, update, options)
      .then((result) => {
        const { matchedCount, modifiedCount } = result;
        if (matchedCount && modifiedCount) {
          console.log(`Successfully added a new review.`);
        }
      })
      .catch((err) => console.error(`Failed to add review: ${err}`));
  } catch (err) {
    console.log(err);
  } finally {
    await dbClient.close();
  }
}
