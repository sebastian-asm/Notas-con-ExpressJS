const lowdb = require('lowdb'),
  FileAsync = require('lowdb/adapters/FileAsync');

let db;

async function createConnection() {
  const file = new FileAsync('db.json');
  db = await lowdb(file);
  db.defaults({ entries: [] }).write();
}

const getConnection = () => db;

module.exports = {
  createConnection,
  getConnection
};
