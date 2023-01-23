module.exports = (app) => {
    // imports
    const router = require('express').Router()
    const FoodController = require('../Components/Food')

    // routes

    router.get('/', FoodController.index);
    router.get('/:id', FoodController.getById);

    router.post('/', FoodController.createNewFood)

    app.use("/ou/api/food", router);
}