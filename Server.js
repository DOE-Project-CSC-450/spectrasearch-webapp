const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
//mysql://b391ced6135ff3:baa0d21a@us-cdbr-east-02.cleardb.com/heroku_5ba4f23c163fea6?reconnect=true
//mysql://b53a0acdedd905:39310839@us-cdbr-east-02.cleardb.com/heroku_6f65e659c3e17a8?reconnect=true
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: process.env.PORT || 3306,
  user: "b53a0acdedd905",
  password: "39310839",
  database: "heroku_6f65e659c3e17a8"
});
var sql2;
var ignore;
con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
  /*  sql2 = 'SELECT * FROM `Spectral Distribution Fields`';
  ignore = "DELETE FROM `Spectral Distribution Fields` WHERE 'SpectralQuantity' = 'able'";
  con.query(ignore, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });  */
});

app.use(cors());


app.get('/', (req, res) => {
  res.send("hello from the lighting server");

}) 



/* app.get('products/add', (req, res) =>{
  const {value, SpectralQKey} = req.query;
  console.log(value, SpectralQKey);
  res.send("adding product");
  //to insert things into the database not done
})
 */
app.post('/lighting', (req, result) => {
  result.set('Access-Control-Allow-Origin', '*');
  console.log("this?", typeof (req), "and", typeof (req.body));
  const body = (req.body);
  console.log("do we make it here tho")
  console.log("show me", body.SpectraSearchID)
  console.log("FINALLLLLL", body.type)
  if (body.reportData === undefined) {
    console.log("this is body.tyoe", body.type)
    var practice = 'INSERT INTO `header element fields`(`SpectraSearchID`, `Name`, `Manufacturer`, `CatalogNumber`, `Description`, `DocumentCreator`, `UniqueIdentifier`, `MeasurementEquipment`, `Laboratory`, `ReportNumber`, `Comments`, `Application`, `Type`, `Technology`) VALUES (' + body.SpectraSearchID + ', "' + body.Name + '", "' + body.manufacturer + '", "' + body.catalogNumber + '", "' + body.description + '", "' + body.docCreat + '", "' + body.uniqueIdent + '", "' + body.measureEquip + '", "' + body.labratory + '", "' + body.reportNum + '", "' + body.comments + '", "' + body.application + '", "' + body.type + '", "' + body.technology + '")'
  }
  else {
    var practice = 'INSERT INTO `header element fields`(`SpectraSearchID`, `Name`, `Manufacturer`, `CatalogNumber`, `Description`, `DocumentCreator`, `UniqueIdentifier`, `MeasurementEquipment`, `Laboratory`, `ReportNumber`, `ReportDate`, `Comments`, `Application`, `Type`, `Technology`) VALUES (' + body.SpectraSearchID + ', "' + body.Name + '", "' + body.manufacturer + '", "' + body.catalogNumber + '", "' + body.description + '", "' + body.docCreat + '", "' + body.uniqueIdent + '", "' + body.measureEquip + '", "' + body.labratory + '", "' + body.reportNum + '", "' + body.reportData + '", "' + body.comments + '", "' + body.application + '", "' + body.type + '", "' + body.technology + '")'
  }
  con.query(practice, function (err, result) {
    if (err) throw err;
    console.log("inserted " + result);
  });
  result.send({ message: 'Success' })
});



app.get('/lighting', (req, res) => {
  con.query('SELECT * FROM `Header Element Fields`', (err, results) => {
    if (err) {
      return res.send(error);
    }
    else {
      return res.json({
        data: results
      })
    }
  });
})


app.get('/users', (req, res) => {
  con.query('SELECT * FROM `USERS`', (err, results) => {
    if (err) {
      return res.send(error);
    }
    else {
      return res.json({
        data: results
      })
    }
  });
})

app.post('/users', (req, result) => {
  result.set('Access-Control-Allow-Origin', '*');
  console.log("this?", typeof (req), "and", typeof (req.body));
  const body = (req.body);
  console.log("do we make it here tho")
  console.log("show me", body.usernames)

  var practice2 = 'INSERT INTO `USERS`(`Username`, `Password`) VALUES ("' + body.usernames + '", "' + body.passwords + '")'
  con.query(practice2, function (err, result) {
    if (err) throw err;
    console.log("inserted " + result);
  });
  result.send({ message: 'Success' })
});



app.get('/SpectralData', (req, res) => {
  con.query('SELECT * FROM `spectraldistributionfields`', (err, results) => {
    if (err) {
      return res.send(error);
    }
    else {
      return res.json({
        data: results
      })
    }
  });
})

app.post('/SpectralData', (req, result) => {
  result.set('Access-Control-Allow-Origin', '*');
  console.log("this?", typeof (req), "and", typeof (req.body));
  const body = (req.body);

  var practice3 = 'INSERT INTO `spectraldistributionfields`(`SpectraSearchID`, `SpectralData`) VALUES ("' + body.SpectraSearchID + '", "' + body.specData + '")'
  con.query(practice3, function (err, result) {
    if (err) throw err;
    console.log("inserted spectral result " + result);
  });
  result.send({ message: 'Success' })
});


app.get('/metrics', (req, res) => {
  con.query('SELECT * FROM `metrics`', (err, results) => {
    if (err) {
      return res.send(error);
    }
    else {
      return res.json({
        data: results
      })
    }
  });
})

app.post('/metrics', (req, result) => {
  result.set('Access-Control-Allow-Origin', '*');
  console.log("this?", typeof (req), "and", typeof (req.body));
  const body = (req.body);
  var practice4 = 'INSERT INTO `metrics`(`SpectraSearchID`, `lumens`, `watts`, `volts`, `cc_X`, `cc_Y`, `cc_Z`, `CIEXY`, `CCT`, `FSI`, `FSCI`, `GAI`, `CRI_R1`, `CRI_R2`, `CRI_R3`, `CRI_R4`, `CRI_R5`, `CRI_R6`, `CRI_R7`, `CRI_R8`, `CRI` ) VALUES ("' + body.SpectraSearchID + '", "' + body.lumens + '", "' + body.watts + '", "' + body.volts + '", "' + body.cc_X + '", "' + body.cc_Y + '", "' + body.cc_Z + '", "' + body.CIEXY + '", "' + body.CCT + '", "' + body.FSI + '", "' + body.FSCI + '", "' + body.GAI + '", "' + body.CRI_R1 + '", "' + body.CRI_R2 + '", "' + body.CRI_R3 + '", "' + body.CRI_R4 + '", "' + body.CRI_R5 + '", "' + body.CRI_R6 + '", "' + body.CRI_R7 + '", "' + body.CRI_R8 + '", "' + body.CRI + '")'
  console.log("this is practice4", practice4)
  con.query(practice4, function (err, result) {
    if (err) {throw err};
    console.log("inserted spectral result " + result);
  });
  result.send({ message: 'Success' })
});







var ports = process.env.PORT || 4000;
app.listen(ports, function() {
  console.log("Listening on " + ports);
});

//user logs in verify email
//any person can make an account
//lighting manufacturers send doe bulk technical sheets so must of it is stuff they already have
//upload and download, download in different forms
//ies, xml text file, and

//make an admin page
