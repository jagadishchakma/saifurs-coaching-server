// dependencies
const mongoose = require('mongoose');

// create schema
const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    }
})

module.exports = reviewSchema;