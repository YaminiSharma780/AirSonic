const {FlightRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const {compareDateTime} = require('../utils/helpers/datetime-helpers');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        console.log("inside flight-service");
        const flight = await flightRepository.create(data);
        if(compareDateTime(flight.arrivalTime, flight.departureTime)){
            console.log("incorrect arrival departure time");
            throw new AppError(
                explanation,
                StatusCodes.BAD_REQUEST
            );
        }
        return flight;
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
            "can not create a new flight object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getFlights(){
    try {
        const flights = await flightRepository.getAll();
        return flights;
    } catch (error) {   
        throw new AppError(
            "can not fetch data of all flights",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getFlight(id) {
    try {
        const flight = await flightRepository.get(id);
        return flight;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('no flight present with requested id', error.statusCode);
        }
        throw new AppError('cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyFlight(id) {
    try {
        const response = await flightRepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('the flight you requested to delete is not present', error.statusCode);
        }
        throw new AppError('cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateFlight(id, data) {
    try {
        console.log("inside flight-service");
        const response = await flightRepository.update(id, data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('the flight you requested to delete is not present', error.statusCode);
        }
        throw new AppError(
            "can not create a new flight object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = 
{
    createFlight,
    getFlights,
    getFlight,
    destroyFlight,
    updateFlight
};