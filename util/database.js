const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_sql",
  password: "accessdenied123",
});

module.exports = pool.promise();