const express = require('express');

const {AirportController} = require('../../controllers');

const {AirportMiddlewares} = require('../../middlewares');

const router = express.Router();

console.log("inside airport-routes");

// POST: /api/v1/airplanes 
router.post('/', 
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);

// GET: /api/v1/airports
router.get('/', AirportController.getAirports);

// /api/v1/airports/:id GET
router.get('/:id', AirportController.getAirport);

// /api/v1/airports/:id DELETE
router.delete('/:id', AirportController.destroyAirport);

// /api/v1/airports/:id UPDATE (PATCH)
router.patch('/:id', AirportController.updateAirport);

module.exports = router;