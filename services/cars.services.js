let data = require("../mock/carsdatas.json")
const serviceCallResult = require("../responses/serviceCallResult.response")
const carsRepository = require("../repositories/cars.repository")

const findAll = async(filters) => {    
    if(filters){
        const result = await carsRepository.findFiltered(filters)
        return serviceCallResult.ok(result)
    }
 
    const result = await carsRepository.findAll()
    return serviceCallResult.ok(result)
}

const findOneById = async (id) => {
    const car = await carsRepository.findById(id)
 
    if(!car) return serviceCallResult.notFound(`car with id #${id} not found`)
    
    return serviceCallResult.ok(car)
}

const create = async (car = {}) => {
    const {brand, model, year, hp} = car

    if(brand && model && year && hp) {
        await carsRepository.create(car);
        return serviceCallResult.created()
    } 

    const errorDetails = ["A car must have "]
    
    if(!brand) errorDetails.push("a brand");
    if(!model) errorDetails.push("a model");
    if(!year) errorDetails.push("a year");
    if(!hp) errorDetails.push("hps");

    const error = errorDetails.join(" ,")
    return serviceCallResult.badRequest(error)
}

const update = async (id, newCar = {}) => {
    const {brand, model, year, hp} = car
     const car = await carsRepository.findById(id)

     if(!car) return serviceCallResult.notFound(`car with id #${id} not found`)
     
     await carsRepository.update(car, newCar)

     return serviceCallResult.noContent()

}

const remove = async (id) => {
    const car = await carsRepository.findById(id)
 
    if(!car) return serviceCallResult.notFound(`car with id #${id} not found`)
     
     await carsRepository.remove(car)
 
     return serviceCallResult.noContent()
}

module.exports = {
    findAll, findOneById, create, update, remove
}