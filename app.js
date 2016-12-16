require('dotenv').load();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pgp = require('pg-promise')();
var db = pgp(process.env.DATABASE_URL);

var totalScore = require('./js/game.js');

var username;

// this is to serve the css and js from the public folder to your app
// it's a little magical, but essentially you put files in there and link
// to them in you head of your files with css/styles.css
app.use(express.static(__dirname + '/public'));

// this is setting the template engine to use ejs
app.set('view engine', 'ejs');

// setting your view folder
app.set('views', __dirname+'/views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// get the username
app.get('/', function(req, res, next){
  db.any('SELECT * FROM scores ORDER BY score DESC LIMIT 10')
    .then(function(data){
      return res.render('index', {scores: data})
    })
    .catch(function(err){
      return next(err);
    });
});

// play the game
app.post('/name', function(req, res, next){
  username = req.body.name;
  console.log(req.body);
  res.render('game');
});

// gettting all the scores
app.post('/game', function(req, res, next){
  //console.log(req.body);
  var topScore =  checkAnswers(req.body);
  db.none('insert into scores(name, score)' +
     'values($1, $2)',
   [username, topScore])
   .then(function () {
     res.redirect('/');
   })
   .catch(function (err) {
     return next(err);
   });
});

app.listen(process.env.PORT, function(){
  console.log('Application running on localhost on port 3000');
});
