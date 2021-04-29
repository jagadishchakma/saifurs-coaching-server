// dependencies
const mongoose = require('mongoose');

// create schema
const admissionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    course:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'On Going', 'Done'],
    }
})

module.exports = admissionSchema;