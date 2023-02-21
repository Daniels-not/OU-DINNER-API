// imports

const mongoose = require('mongoose');

// Food Schema

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Category', Category);