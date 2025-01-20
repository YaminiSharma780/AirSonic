const {AirportRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        console.log("inside Airport-service");
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError(
                explanation,
                StatusCodes.BAD_REQUEST
            );
        }
        throw new AppError(
            "can not create a new Airport object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirports(){
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {   
        throw new AppError(
            "can not fetch data of all Airports",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('no Airport present with requested id', error.statusCode);
        }
        throw new AppError('cannot fetch data of all the Airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id) {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('the Airport you requested to delete is not present', error.statusCode);
        }
        throw new AppError('cannot fetch data of all the Airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateAirport(id, data) {
    try {
        console.log("inside Airport-service");
        const response = await airportRepository.update(id, data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('the Airport you requested to delete is not present', error.statusCode);
        }
        throw new AppError(
            "can not create a new Airport object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = 
{
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
};