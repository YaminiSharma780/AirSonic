const {StatusCodes} = require('http-status-codes');
const {CityService} = require('../services');
const {SuccessResponse, ErrorResponse} = require('../utils/common');

async function createCity(req, res){
    try {
        console.log("inside city-controller");
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res.
                status(StatusCodes.CREATED).
                json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.
                status(error.statusCode).
                json(ErrorResponse)
    }
}

async function getCities(req, res){
    try {
        const cities = await CityService.getCities();
        SuccessResponse.data = cities;
        return res.
                status(StatusCodes.OK).
                json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.
                status(error.statusCode).
                json(ErrorResponse)
    }
}

async function getCity(req, res) {
    try {
        const city = await CityService.getCity(req.params.id);
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * DELETE : /airplanes/:id
 * req-body {}
 */
async function destroyCity(req, res) {
    try {
        const cities = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = cities;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


/**
 * PATCH : /airplanes/:id
 * req-body {}
 */
async function updateCity(req, res) {
    try {
        const city = await CityService.updateCity(req.params.id, 
            {
                name: req.body.name
            }
        );
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}