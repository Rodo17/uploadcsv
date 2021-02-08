const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'autofi';

let db = null;

module.exports.init = async (document) => {
  try {
    MongoClient.connect(url, function (err, client) {
      assert.equal(null, err);
      console.log('Connected successfully to server');

      db = client.db(dbName);

      //client.close();
    });
  } catch {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

module.exports.insertDocument = (document, callback) => {
  try {
    const collection = db.collection('documents');
    collection.insertMany(document, (err, res) => {
      if (err) throw err;
      callback(res.ops);
    });
  } catch (e) {
    print(e);
    return false;
  }
};
