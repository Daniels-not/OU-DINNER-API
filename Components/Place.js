// imports

const boom = require("boom");
const mongoose = require("mongoose");
const {Place} = require("../Schema/index");

// methods

const PlaceController = {
/* This is a method that is being exported to the server.js file. It is a method that is being called
when the user goes to the url /places. It is a get request. */
    async index(req, res) {
        try {
            const place = await Place.findOne().populate('food')
            res.status(200).send(place)
        } catch(err) {
            throw boom.boomify(err);
        }
    },

/* This is a method that is being exported to the server.js file. It is a method that is being called
when the user goes to the url /places/:id. It is a get request. */
    async getById(req, res) {
        try {
            const id = req.params === undefined ? req.id : req.params.id
            const place = await Place.findOne(id).populate('Place')
            res.status(200).send(place)
        } catch (err) {
            throw boom.boomify(err);
        }
    },

/* Creating a new place. */
    async createNewPlace(req, res) {
        try {
            if (!req.body) {
                res.status(400).send({
                    message: 'Content can not be empty!',
                })
            }
            const place = Place.create(req.body);
            res.send("Place Added Successfully");
        } catch (err) {
            throw boom.boomify(err);
        }
    },

/**
 * It takes the id of the place and the ranking from the body of the request and updates the ranking of
 * the place in the database.
 * @param req - the request object
 * @param res - the response object
 */
    async UpdateRanking(req, res) {
        try {
            if (!req.body) {
                res.status(400).send({
                    message: 'Content can not be empty!',
                })
            }
            const id = req.params === undefined ? req.id : req.params.id;
            const ranking = Place.findByIdAndUpdateRank(id, req.body);
            res.send("Thank you for your feedback")
        } catch(err) {
            throw boom.boomify(err);
        }
    }
}

module.exports = PlaceController;