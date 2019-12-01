const express = require('express');
const cors = require('cors');
const app = express();


var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysql",
  database: "Round2"
});
var sql2;
var ignore;
con.connect(function(err){
  if(err) throw err;
  console.log("connected!");
  sql2 = 'SELECT * FROM `Spectral Distribution Fields`';
  ignore = "INSERT INTO `Spectral Distribution Fields` (SpectralQuantity) VALUES ('able')";
  con.query(ignore, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

app.use(cors());


app.get('/', (req, res) =>{
  res.send("hello from the lighting server");
  
})

/* app.get('products/add', (req, res) =>{
  const {value, SpectralQKey} = req.query;
  console.log(value, SpectralQKey);
  res.send("adding product");
  //to insert things into the database not done
})
 */
app.get('/lighting', (req, res) => {
  con.query('SELECT * FROM `Spectral Distribution Fields`', (err, results) => {
    if (err){
      return res.send(error);
    }
    else{
      return res.json({
        data: results
      })
    }
  });
}) 



app.listen(4000, () => {
  console.log("lighting server listening on port 4000");
})



//user logs in verify email
//any person can make an account
//lighting manufacturers send doe bulk technical sheets so must of it is stuff they already have
//upload and download, download in different forms
//ies, xml text file, and

//make an admin page
