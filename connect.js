const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;

const MONGODB_CONNECTION_STRING = 'mongodb://localhost:27017';
const MONGODB_DATABASE_NAME = 'men-presentation';

MongoClient.connect(MONGODB_CONNECTION_STRING, { useNewUrlParser: true })
  .then(
    client => {
      client.db(MONGODB_DATABASE_NAME)
        .collection('hamsters')
        .find()
        .toArray()
        .then(
          hamsters => console.log(hamsters),
          _err => console.error(_err)
        );
    },
    err => {
      console.error(err);
    }
  );



