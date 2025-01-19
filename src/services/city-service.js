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

module.exports = {
    createCity
}