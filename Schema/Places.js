// imports

const mongoose = require('mongoose');

// Food Schema

const Place = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        require: true
    },
    image: {
        type: String,
        required: true
    },
    ranking: {
        type: Number,
    },
    food: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('Place', Place);