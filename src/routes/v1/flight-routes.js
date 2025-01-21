const express = require('express');

const {FlightController} = require('../../controllers');

const {FlightMiddlewares} = require('../../middlewares');

const router = express.Router();

console.log("inside flight-routes");

// POST: /api/v1/flights 
router.post('/', 
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);

// GET: /api/v1/flights
router.get('/', FlightController.getFlights);

// /api/v1/flights/:id GET
router.get('/:id', FlightController.getFlight);

// /api/v1/flights/:id DELETE
router.delete('/:id', FlightController.destroyFlight);

// /api/v1/flights/:id UPDATE (PATCH)
router.patch('/:id', FlightController.updateFlight);

module.exports = router;