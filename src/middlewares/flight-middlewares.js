const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next){
    if(!req.body.flightNumber){
        ErrorResponse.message = "something went wrong while creating an flight",
        ErrorResponse.error = new AppError(["flightNumber not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = "something went wrong while creating an flight",
        ErrorResponse.error = new AppError(["airplaneId not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = "something went wrong while creating an flight",
        ErrorResponse.error = new AppError(["flight arrivalAirportId not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = "something went wrong while creating an flight",
        ErrorResponse.error = new AppError(["flight depaartureAirportId not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message = "something went wrong while creating an flight",
        ErrorResponse.error = new AppError(["flight arrivalTime not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message = "something went wrong while creating an flight",
        ErrorResponse.error = new AppError(["flight departureTime not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.price){
        ErrorResponse.message = "something went wrong while creating an flight",
        ErrorResponse.error = new AppError(["flight price not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message = "something went wrong while creating an flight",
        ErrorResponse.error = new AppError(["flight totalSeats not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}

module.exports = {validateCreateRequest}