const {AirplaneRepository} = require('../repositories');
const {CityRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data){
    try {
        console.log("inside airplane-service");
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        // console.log(error);
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
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
            "can not create a new city object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getCities(){
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (error) {   
        throw new AppError(
            "can not fetch data of all cities",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getCity(id) {
    try {
        const city = await cityRepository.get(id);
        return city;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('no city present with requested id', error.statusCode);
        }
        throw new AppError('cannot fetch data of all the cities', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('the city you requested to delete is not present', error.statusCode);
        }
        throw new AppError('cannot fetch data of all the cities', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateCity(id, data) {
    try {
        console.log("inside airplane-service");
        const response = await cityRepository.update(id, data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('the airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppError(
            "can not create a new airplane object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}