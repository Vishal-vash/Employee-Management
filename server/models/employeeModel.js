//Load Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a Schema
var empSchema = new Schema({
    firstName : {type : String, required: true},
    lastName : String,
    age : String,
    department : String,
    designation : String,
    salary : String
});

//Use Schema
var Employees = mongoose.model('Employees', empSchema)

//Make available to users in Node Application
module.exports = Employees;