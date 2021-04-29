// dependencies
const express = require('express');
const mongoose = require('mongoose');
const userSchema = require('../shcemas/userSchema');

// create a router
const router = express.Router();

// create a model 
const Users = new mongoose.model('User',  userSchema);

// insert users
router.post('/', (req, res) => {
    const newUser = new Users(req.body);
    newUser.save((err) => {
        if(err){
            res.status(401).json({error: 'There was a server side error'});
        }else{
            res.status(200).json({message: 'Success User Access'});
        }
    })
})

// get specific user
router.get('/:email', (req, res) => {
    Users.find({email: req.params.email}, (err, result) => {
        if(err){
            res.status(401).json({error: 'There was nothing users'});
        }else{
            res.status(200).json({message: result});
        }
    });
});

// user role update
router.put('/:email', (req, res) => {
    Users.updateOne({email: req.params.email}, {$set: req.body}, (err) => {
        if(err){
            res.status(401).json({error: 'There was nothing users'});
        }else{
            res.status(200).json({message: 'Successfully Updated'});
        }
    });
})

module.exports = router;