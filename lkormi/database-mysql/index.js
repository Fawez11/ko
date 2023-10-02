const mysql = require('mysql2');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig).promise();

const getAllPhrases = function() {
 return connection.query ('SELECT * FROM phrases');
};
const updatePhrase = function(id,status){
let queryStr='UPDATE phrases SET status=? WHERE id=?'
return connection.query(queryStr,[status,id])
}
module.exports = {
  getAllPhrases,
  updatePhrase
};