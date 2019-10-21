var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: 'spectra'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


});
