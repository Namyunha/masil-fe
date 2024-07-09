import { MongoClient } from 'mongodb';
import { userList } from '@/mocks/data/userList';
import { dbUserData, dbUserProps, userData } from '@/types/user';

// Replace the following with your Atlas connection string
const uri = process.env.DATABASE_URL as string;

export const dbClient = new MongoClient(uri);

const connectDB = async () => {
  await dbClient.connect();
  const db = dbClient.db('masil');
  const col = db.collection('user');
  return col;
};

export async function findUser({ searchData, searchSource }: dbUserProps) {
  let data: userData | undefined;
  switch (searchSource) {
    case 'email':
      data = userList.find((user) => user.email === searchData);
      break;
    case 'nickName':
      data = userList.find((user) => user.nickName === searchData);
      break;
  }
  return data;
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

export async function updateUser({ emailid, data, key }: dbUserProps) {
  try {
    const col = await connectDB();
    const query = { emailid };
    const options = { upsert: true };
    let update = {};
    switch (key) {
      case 'refreshToken':
        update = { $set: { refreshToken: data } };
    }
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
