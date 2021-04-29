// dependencies
const express = require('express');
const mongoose = require('mongoose');
const admissionSchema = require('../shcemas/admissionSchema');

// create router
const router = express.Router();

// create model
const Admissions = new mongoose.model('Admission', admissionSchema);

// admissin post
router.post('/', (req, res) => {
    const newAdmission = new Admissions(req.body);
    newAdmission.save({}, (err) => {
        if(err){
            res.status(401).json({error: 'There was a server side error'});
        }else{
            res.status(200).json({message: 'Successfully Admission Enrolled'});
        }
    })
});

// admission get
router.get('/', (req, res) => {
    Admissions.find({}, (err, result) => {
        if(err){
            res.status(401).json({error: 'There was a server side error'});
        }else{
            res.status(200).json(result);
        }
    })
})

// admission get spacific user
router.get('/:email', (req, res) => {
    Admissions.find({email: req.params.email}, (err, result) => {
        if(err){
            res.status(401).json({error: 'There was a server side error'});
        }else{
            res.status(200).json(result);
        }
    })
})

// admission update
router.put('/:id', (req, res) => {
    const {id} = req.params;
    Admissions.updateOne({_id: id}, {$set: req.body}, (err) => {
        if(err){
            res.status(401).json({error: 'There was a server side error'});
        }else{
            res.status(200).json({message: 'Successfully Admission Updated'});
        }
    })
})


module.exports = router;