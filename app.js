require('dotenv').load();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pgp = require('pg-promise')();
var db = pgp(process.env.DATABASE_URL);
var scoreTotal = require('./js/game.js');

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
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// get the username
app.get('/', function(req, res, next){
  res.render('index');
});

// play the game
app.get('/game', function(req, res, next){
  username = req.body.name;
  res.render('game', {username: username});
});

// gettting all the scores
app.post('/game', function(req, res, next){
  //var quiz_scores = scoreTotal.checkAnswers(req.form);
  db.none('insert into scores(name, score)' +
     'values(${username}, ${score})',
   req.body)
   .then(function () {
     res.redirect('/scores');
   })
   .catch(function (err) {
     return next(err);
   });
});

// gettting all the scores
app.get('/scores', function(req, res, next){
  db.any('SELECT NULLIF(*) FROM scores ORDER BY score::int DESC LIMIT 10')
    .then(function(data){
      return res.render('scores', {scores: data})
    })
    .catch(function(err){
      return next(err);
    });
});

// retry the game
app.get('/retry', function(req, res, next){
  res.render('game', {username: username});
});

app.listen(process.env.PORT, function(){
  console.log('Application running on localhost on port 3000');
});
