//Get Dependencies

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose')

//DB Connect
mongoose.connect('mongodb://localhost/employees');

//Get Our API Routes

const api = require('./server/routes/api')

const app = express();

//Parses for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Point Static Path to Dist
app.use(express.static(path.join(__dirname + '/client/dist')));

//Set Our API routes
app.use('/api', api)

//Catch all routes and return the index file
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/client/dist/index.html'))
});

//Get Port from Enviroment and store in Express
const Port = process.env.Port || 3000;
app.set('port', Port)

//Create HTTP Server
const server = http.createServer(app);

//Listen to provided Port
server.listen(Port, ()=> console.log("Server Started At " + Port));