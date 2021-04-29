// dependencies
const express = require('express');
const mongoose = require('mongoose');
const reviewSchema = require('../shcemas/reviewSchema');

// create router
const router = express.Router();

// create model
const Reviews = new mongoose.model('Review', reviewSchema);

// insert reviews 
router.post('/', (req, res) => {
    const newReview = new Reviews(req.body);
    newReview.save({}, (err) => {
        if(err){
            res.status(401).json({error: 'There was a server side error'});
        }else{
            res.status(200).json({message: 'Successfully Review Inserted'})
        }
    })
})

// get Reviews
router.get('/', (req, res) => {
    Reviews.find({}, (err, result) => {
        if(err){
            res.status(401).json({error: 'There was a server side error'});
        }else{
            res.status(200).json(result);
        }
    })
})


module.exports = router;