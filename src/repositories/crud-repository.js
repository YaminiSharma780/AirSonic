const {Logger} = require('../config');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');

class CrudRepository {
    constructor(model){
        this.model=model;
    }
    async create(data){
        console.log("inside create() crud-repository");
        const response = await this.model.create(data);
        return response;
    }
    async destroy(data){
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        if(!response){
            throw new AppError("sorry! not found any resource to delete", StatusCodes.NOT_FOUND);
        }
        return response;
    }
    async get(data){
        console.log("inside get() crud-repository");
        const response = await this.model.findByPk(data);
        if(!response){
            throw new AppError("sorry! not found any resource to fetch", StatusCodes.NOT_FOUND);
        }
        return response;
    }
    async getAll(){
        console.log("inside getAll() crud-repository");
        const response = await this.model.findAll();
        return response;
    }
    async update(id, data){
        console.log("inside update() crud-repository");
        const response1 = await this.model.findByPk(id);
        if(!response1){
            throw new AppError("sorry! not found any resource to fetch", StatusCodes.NOT_FOUND);
        }
        const response2 = await this.model.update(data,{
            where:{
                id: id
            }
        });
        console.log("update response : ", response2);
        return response2;
    }
}
module.exports = CrudRepository;