const express = require('express');
const router = express.Router();

//Get Model
const Employee = require('../models/employeeModel')


//Get API Listing
router.get('/employee', (req,res) => {
    Employee.find(function(err, resource){
        if(err){
            res.send(err).status(404)
        }
        else{
            res.send(resource).status(200)
        }
    })
})

router.post('/employee', (req, res) => {
    var employee = new Employee(req.body);
    employee.save(function(err, resource){
        if(err){
            res.send(err).status(501)
        }
        else{
            res.send(resource).status(201)
        }
    })
})

router.delete('/employee/:id',(req, res) => {
    var id = req.params.id;
    Employee.remove({_id : id}, (err, response) => {
        (err) ? res.send(err).status(500) : res.send(response).status(200)
    })
})

module.exports = router;