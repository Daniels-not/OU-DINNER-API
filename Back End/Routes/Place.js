module.exports = (app) => {
    // imports

    const router = require('express').Router();
    const PlaceController = require('../Components/Place');

    // routes

    router.get('/', PlaceController.index);
    router.get('/:id', PlaceController.getById);

    router.post('/', PlaceController.createNewPlace);

    router.put('/:id', PlaceController.UpdateRanking);

    app.use("/ou/api/place", router);
}
