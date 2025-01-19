const express = require('express');

const {CityMiddlewares} = require('../../middlewares');

const {CityController} = require('../../controllers');

const router = express.Router();

console.log("inside city-routes");

// POST: /api/v1/cities 
router.post('/', 
    CityMiddlewares.validateCreateRequest,
    CityController.createCity);

module.exports = router;