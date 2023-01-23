module.exports = (app) => {
    // imports
    const router = require('express').Router()
    const CategoryController = require('../Components/Category')

    // routes

    router.get('/', CategoryController.index);
    router.get('/:id', CategoryController.getById);

    router.post('/', CategoryController.createNewCategory)

    app.use("/ou/api/category", router);
}