const express = require('express');

const {CityMiddlewares} = require('../../middlewares');

const {CityController} = require('../../controllers');

const router = express.Router();

console.log("inside city-routes");

// POST: /api/v1/cities 
router.post('/', 
    CityMiddlewares.validateCreateRequest,
    CityController.createCity);

// GET: /api/v1/cities 
router.get('/', CityController.getCities);

// /api/v1/cities/:id GET
router.get('/:id', CityController.getCity);

// /api/v1/cities/:id DELETE
router.delete('/:id', CityController.destroyCity);

// /api/v1/cities/:id UPDATE (PATCH)
router.patch('/:id', CityController.updateCity);

module.exports = router;