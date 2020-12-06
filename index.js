//index.js
//Import Express
let express = require('express')
//Start App
let app = express();
//Assign port
var port = process.env.PORT || 8080;
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})

//trying to solve the cors problems
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    next();
  });
  
//import body parser
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');
//Import routes
let apiRoutes = require("./routes")

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//connect to mongoose
const dbPath = 'mongodb://localhost/firstrest';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})

//Use API routes in the App
app.use('/api', apiRoutes)

//https://medium.com/wesionary-team/create-your-first-rest-api-with-node-js-express-and-mongodb-447fce535385