// imports

const boom = require("boom");
const mongoose = require("mongoose");
const {Category} = require("../Schema/index");

// methods

const CategoryController = {
/* A method that is being exported to the router. */
    async index(req, res) {
        try {
            const category = await Category.findOne()
            res.status(200).send(category)
        } catch(err) {
            throw boom.boomify(err);
        }
    },

/* A method that is being exported to the router. */
    async getById(req, res) {
        try {
            const id = req.params === undefined ? req.id : req.params.id
            const category = await Category.findOne(id)
            res.status(200).send(category)
        } catch (err) {
            throw boom.boomify(err);
        }
    },

/**
 * It creates a new category in the database.
 * @param req - The request object.
 * @param res - The response object.
 */
    async createNewCategory(req, res) {
        try {
            if (!req.body) {
                res.status(400).send({
                    message: 'Content can not be empty!',
                })
            }
            const category = Category.create(req.body);
            res.send("Category Added Successfully");
        } catch (err) {
            throw boom.boomify(err);
        }
    }
}

module.exports = CategoryController;