// imports

const boom = require("boom");
const mongoose = require("mongoose");
const {Food} = require("../Schema/index");

// methods

const FoodController = {
/* A method that is called when the user goes to the index route. It is an async function that returns
a promise. It is using the mongoose findOne method to find the first document in the database. */
    async index(req, res) {
        try {
            const food = await Food.findOne()
            res.send(food)
        } catch(err) {
            throw boom.boomify(err);
        }
    },

/* A method that is called when the user goes to the index route. It is an async function that returns
a promise. It is using the mongoose findOne method to find the first document in the database. */
    async getById(req, res) {
        try {
            const id = req.params === undefined ? req.id : req.params.id
            const food = await Food.findOne(id)
            res.send(food)
        } catch (err) {
            throw boom.boomify(err);
        }
    },

/**
 * It creates a new food item in the database.
 * @param req - The request object.
 * @param res - The response object.
 */
    async createNewFood(req, res) {
        try {
            if (!req.body) {
                res.status(400).send({
                    message: 'Content can not be empty!',
                })
            }
            const food = Food.create(req.body);
            res.send("Food Added Successfully");
        } catch (err) {
            throw boom.boomify(err);
        }
    }
}

module.exports = FoodController;