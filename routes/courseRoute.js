// dependencies
const express = require('express');
const mongoose = require('mongoose');
const CourseSchema = require('../shcemas/courseSchema');
// create a router
const router = express.Router();

// create model
const Courses = new mongoose.model('Course', CourseSchema) 

// course insert
router.post('/', (req, res) => {
    const newCourse = new Courses(req.body);
    console.log(req.body);
    newCourse.save(err => {
        if(err) {
            res.status(401).json({error: 'There was a server side error'})
        }else{
            res.status(200).json({message: 'Successfully Data Inserted'})
        }
    })
})

// get course
router.get('/', (req, res) => {
    Courses.find({}, (err, result) => {
        if(err) {
            res.status(401).json({error: 'There was a server side error'})
        }else{
            res.status(200).json(result);
        }
    })
})

// get single course
router.get('/:id', (req, res) => {
    Courses.find({_id: req.params.id}, (err, result) => {
        if(err){
            res.status(401).json({error: 'There was a server side error'});
        }else{
            res.status(200).json(result);
        }
    })
})

// delete course
router.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    Courses.deleteOne({_id: id}, (err) => {
        if(err) {
            res.status(401).json({error: 'There was a server side error'})
        }else{
            res.status(200).json({message: 'Successfully Course Deleted'});
        }
    })
})


// module exposrst
module.exports = router;