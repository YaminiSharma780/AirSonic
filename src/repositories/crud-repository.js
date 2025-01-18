const {Logger} = require('../config');
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
        return response;
    }
    async get(data){
        console.log("inside get() crud-repository");
        const response = await this.model.findByPk(data);
        return response;
    }
    async getAll(){
        console.log("inside getAll() crud-repository");
        const response = await this.model.findAll();
        return response;
    }
    async update(id, data){
        const response = await this.model.update(data,{
            where:{
                id: id
            }
        });
        return response;
    }
}
module.exports = CrudRepository;