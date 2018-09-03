const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;

const MONGODB_CONNECTION_STRING = 'mongodb://localhost:27017';
const MONGODB_DATABASE_NAME = 'men-presentation';

module.exports = {

  createHamster: async (hamster) => {
    try {
      const client = await MongoClient.connect(MONGODB_CONNECTION_STRING, { useNewUrlParser: true });
      const response = await (client.db(MONGODB_DATABASE_NAME)
        .collection('hamsters'))
        .insertOne(hamster);

      client.close();
      return response.insertedId;
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  },

  deleteHamster: async (id) => {
    try {
      const client = await MongoClient.connect(MONGODB_CONNECTION_STRING, { useNewUrlParser: true });
      await (client.db(MONGODB_DATABASE_NAME)
        .collection('hamsters'))
        .deleteOne({ _id: MongoDB.ObjectId(id) });

      client.close();
      return;
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  },

  getHamsters: async () => {
    try {
      const client = await MongoClient.connect(MONGODB_CONNECTION_STRING, { useNewUrlParser: true });
      const hamsters = await (client.db(MONGODB_DATABASE_NAME)
        .collection('hamsters')
        .find()
        .map(hamster => ({ id: hamster._id, name: hamster.name }))
        .toArray()
      );

      client.close();
      return hamsters;
    }
    catch (err) {
      console.error(err);
      console.log(err);
      throw err;
    }
  },

  getHamster: async (id) => {
    try {
      const client = await MongoClient.connect(MONGODB_CONNECTION_STRING, { useNewUrlParser: true });
      const hamster = await (client.db(MONGODB_DATABASE_NAME)
        .collection('hamsters'))
        .findOne({ _id: MongoDB.ObjectId(id) });

      client.close();
      return hamster;
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  }

}