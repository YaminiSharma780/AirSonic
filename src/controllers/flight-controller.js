const {StatusCodes} = require('http-status-codes');
const {FlightService} = require('../services');
const {SuccessResponse, ErrorResponse} = require('../utils/common');

async function createFlight(req, res){
    try {
        console.log("inside flight-controller");
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureAirportId: req.body.departureAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        });
        SuccessResponse.data = flight;
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

async function getFlights(req, res){
    try {
        const flights = await FlightService.getFlights();
        SuccessResponse.data = flights;
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

async function getFlight(req, res) {
    try {
        const flights = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flights;
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
 * DELETE : /flights/:id
 * req-body {}
 */
async function destroyFlight(req, res) {
    try {
        const flights = await FlightService.destroyFlight(req.params.id);
        SuccessResponse.data = flights;
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
 * PATCH : /flights/:id
 * req-body {}
 */
async function updateFlight(req, res) {
    try {
        const flight = await FlightService.updateFlight(req.params.id, 
            {
                flightNumber: req.body.flightNumber,
                airplaneId: req.body.airplaneId,
                arrivalAirportId: req.body.arrivalAirportId,
                departureAirportId: req.body.departureAirportId,
                arrivalTime: req.body.arrivalTime,
                departureTime: req.body.departureTime,
                price: req.body.price,
                boardingGate: req.body.boardingGate,
                totalSeats: req.body.totalSeats,
            }
        );
        SuccessResponse.data = flight;
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
    createFlight,
    getFlights,
    getFlight,
    destroyFlight,
    updateFlight
}