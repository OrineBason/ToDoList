import{username, password, dbname, collection} from './credentials.js'
import MongoClient from 'mongodb'
const connectionString = 
'mongodb+srv://orine:orine123@cluster0.clp5d.mongodb.net/ToDoList?retryWrites=true&w=majoritystring'
let db, tasksCollection;

MongoClient.connect(connectionString, function(err, client) {
  if(err) {
    throw (err, "the db not connected")
  }
  console.log("Connected successfully to server");
  db = client.db(dbname);
  tasksCollection = db.collection(collection);
});

function insertToDb(item) {
  return tasksCollection.insertOne(item);
};
function findInDb(item) {
  return tasksCollection.find(item);
};
function deleteInDb(item) {
  return tasksCollection.findOneAndDelete(item);
};
function updateInDb(item, update) {
  return tasksCollection.findOneAndUpdate(item, update);
};

export {insertToDb, deleteInDb,findInDb,updateInDb}; 