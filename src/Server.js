
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysql",
  database: "SpectraSearch"
});

con.connect(function(err){
  if(err) throw err;
  console.log("connected!");
  con.query("SELECT * FROM SpectralQuantity", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});



//user logs in verify email
//any person can make an account
//lighting manufacturers send doe bulk technical sheets so must of it is stuff they already have
//upload and download, download in different forms
//ies, xml text file, and

//make an admin page
