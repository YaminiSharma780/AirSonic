const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next){
    if(!req.body.name){
        ErrorResponse.message = "something went wrong while creating an airport",
        ErrorResponse.error = new AppError(["name not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message = "something went wrong while creating an airport",
        ErrorResponse.error = new AppError(["airport code not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.cityId){
        ErrorResponse.message = "something went wrong while creating an airport",
        ErrorResponse.error = new AppError(["airport cityId not found in upcoming request"], StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}

module.exports = {validateCreateRequest}