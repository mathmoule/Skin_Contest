const http = require("http");
const path = require("path");
const fs = require("fs");
const randomstring = require("randomstring");
const express = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'skincontest'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('Connected to database');
  });
const app = express();
const httpServer = http.createServer(app);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // Serves a static route to get the uploaded images
app.use('/static', express.static('upload'));

const PORT = process.env.PORT || 3002;

httpServer.listen(3002, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
app.get("/", express.static(path.join(__dirname, "./public")));

const multer = require("multer");

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "/path/to/temporary/directory/to/store/uploaded/files"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

//
app.post(
  "/skin",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    const tempPath = req.file.path;
    var randomString = randomstring.generate(20);
    console.log(randomString);
    const targetPath = path.join(__dirname, "./upload/i"+randomString+".png");

    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);
        console.log(randomString);
        res
          .status(200)
          .contentType("text/plain")
          .end(randomString);
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
  }
);

app.post("/skinData/:name/:gun/:imageUrl/:idUser", function(req, res){
    var name = req.params.name;
    var gun = req.params.gun;
    var imageUrl = req.params.imageUrl;
    var idUser = req.params.idUser;

    connection.query("insert into skin (nom, gun, imageUrl, id_user) VALUES ('"+name+"', '"+gun+"', '"+imageUrl+"' , '"+idUser+"')", function (error, results, fields) {
        if (error) throw error;
        console.log('Insert done');
      });
    res.end()
});

app.post("/user/SetIsCome/:idUser", function(req, res){
    var idUser = req.params.idUser;

    connection.query("UPDATE user set isComeBefore=true where id="+idUser, function (error, results, fields) {
        if (error) throw error;
        console.log('IsComeBefore has been set to true');
      });
    res.end(true);
});

app.get("/user/GetIsCome/:idUser", function(req, res){
    var idUser = req.params.idUser;

    connection.query("SELECT isComeBefore from user where id="+idUser, function (error, results, fields) {
        if (error) throw error;
        console.log('IsComeBefore has been required');
      });
    res.end(true);
});

app.post("/skinDelete/:idSkin", function(req, res){
    var idSkin = req.params.idSkin;

    connection.query("DELETE FROM skin WHERE id="+idSkin.toString(), function (error, results, fields) {
        if (error) throw error;
        console.log('A skin has been deleted');
      });
    res.end();
});

app.get("/skins", function(req, res){
    connection.query("select * from skin", function(error, results, fields){
        if (error) throw error;

        var JsonResult = [];
        for(var i = 0 ; i < results.length ; i++){
            JsonResult.push(results[i]);
        }


        res.end(JSON.stringify(JsonResult));
    })
})

app.get("/mySkins/:idUser", function(req, res){
   var idUser = req.params.idUser;
    connection.query("select * from skin where id_user='"+idUser+"'", function(error, results, fields){
        if (error) throw error;

        var JsonResult = [];
        for(var i = 0 ; i < results.length ; i++){
            JsonResult.push(results[i]);
        }


        res.end(JSON.stringify(JsonResult));
    })
})

app.post("/skinVote/:id", function(req, res){
  var idSkin = req.params.id;
  connection.query("UPDATE skin set vote=vote+1 where id="+idSkin+" ", function(error, results, fields){
    if (error) throw error;
    res.end("voted");

  })

})

app.post("/userInscript/:pseudo/:password/:mail", function(req, res){ //Inscription D'un Utilisateur
  var pseudo = req.params.pseudo;
  var password = req.params.password;
  var mail = req.params.mail;

  connection.query("INSERT INTO user (pseudo, password, mail) VALUES ('"+pseudo+"', '"+password+"', '"+mail+"')", function (error, results, fields) {
      if (error) throw error;
      connection.query("SELECT id from user where pseudo='"+pseudo+"' and mail='"+mail+"'", function (error, results, fields) {
          if (error) throw error;
          res.end(results[0].id.toString())
        });
    });

})

app.post("/user/:pseudo", function(req, res){ //Connexion d'un utilisateur
  var pseudo = req.params.pseudo;

  connection.query("SELECT id from user where pseudo='"+pseudo.toString()+"' ", function (error, results, fields) {
      if (error) throw error;
      res.end(results[0].id.toString());
    });

})

app.post("/userPass/:id/:password", function(req, res){
  var id = req.params.id;
  var typedPass = req.params.password
  connection.query("SELECT password from user where id="+id+" ", function (error, results, fields) {
      if (error) throw error;

      var mysqlPass = results[0].password.toString();

      if(typedPass === mysqlPass ){
        res.end("0");
      }else{
        res.end("1");
      }

    });
})
