const express = require('express');

const {AirplaneController} = require('../../controllers');

const {AirplaneMiddlewares} = require('../../middlewares');

const router = express.Router();

console.log("inside airplane-routes");

// POST: /api/v1/airplanes 
router.post('/', 
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

// GET: /api/v1/airplanes 
router.get('/', AirplaneController.getAirplanes);

// /api/v1/airplanes/:id GET
router.get('/:id', AirplaneController.getAirplane);

// /api/v1/airplanes/:id DELETE
router.delete('/:id', AirplaneController.destroyAirplane);

module.exports = router;