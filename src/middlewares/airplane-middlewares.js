const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message = "something went wrong while creating an airplane",
        ErrorResponse.error = {explaination: "modelNumber not found in upcoming request"}
        return res.
        status(StatusCodes.BAD_REQUEST).
        json(ErrorResponse);
    }
    next();
}

module.exports = {validateCreateRequest}