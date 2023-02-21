// imports

const mongoose = require('mongoose');

// Food Schema

const Food = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Food', Food);