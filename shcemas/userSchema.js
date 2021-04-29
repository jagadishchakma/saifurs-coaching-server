// dependencies
const mongoose = require('mongoose');

// create schema
const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
    },
});

module.exports = userSchema;