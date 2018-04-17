// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
//var morgan = morgan('dev')

// new express app
var app = express()

// middleware
// app.use(morgan('dev'))
//app.use(express.static(path.join(__dirname, 'public/views')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//review - routes
// app.get('/Hello',function(req,res){
//   res.send("Hello Bastard")
// })

//review - params and optional?
// app.get('/:variableHere?/:second?/:third?/:optional?',function(req,res){
//   res.send(req.params)
//   res.send(req.params.third)
// })


//review - routes and html

var playerArray = []


//used by addPlayer.html  -------------------------
app.post('/addPlayer', function (req, res) {
  req.body
  playerArray.push(req.body)
  console.log(playerArray)
  //req.body happens only when there are passed entries from addPlayer.html
})
//---------------------------------------------

//used by viewPlayers.html-------------------------
app.post('/deleteRoster', function (req, res) {
  playerArray = []
})

app.get('/getPlayers', function (req, res) {
  res.json(playerArray)
})
//--------------------------------------------------

// These set the .html files ---------------
app.get("/", function (req, res) {
  res.sendFile('/public/views/index.html', { root: __dirname });
});

app.get("/add", function (req, res) {
  res.sendFile('/public/views/addPlayer.html', { root: __dirname });
});

app.get("/view", function (req, res) {
  res.sendFile('/public/views/viewPlayers.html', { root: __dirname });
});
// --------------------------------------

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})
