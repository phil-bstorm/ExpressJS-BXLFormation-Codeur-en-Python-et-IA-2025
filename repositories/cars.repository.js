let data = require("../mock/carsdatas.json");


//INTERNAL
findNextId = () => {
    const car = data?.at(-1);
    if (!car) return 1;
    else return user.id + 1;
  };
  //
  
  findAll = () => {
    return new Promise((res, rej) => res(data));
  };
  
  findFiltered = (filters) => {
    
    const predicate = []
    if(filters.brand) predicate.push(c => c.brand.toLowerCase() == filters.brand.toLowerCase())
    if(filters.model) predicate.push(c => c.model.toLowerCase() == filters.model.toLowerCase())
    if(filters.minHp) predicate.push(c => c.hp>=filters.minHp)
    if(filters.maxHp) predicate.push(c => c.hp<=filters.maxHp)
    if(filters.minYear) predicate.push(c => c.year>=filters.minYear)
    if(filters.maxYear) predicate.push(c => c.year<= filters.maxYear)

    return new Promise((res, rej) => {
      const result = data.filter(
        c => predicate.every(p => p(c))
      );
      res(result);
    });
  };
  
  findById = (id) => {
    return new Promise((res, rej) => {
      const car = data.find((c) => c.id == id);
      res(car);
    });
  };
  
  create = (car) => {
    return new Promise((res, rej) => {
      const nextId = findNextId();
      car.id = nextId;
      data.push(car);
      res();
    });
  };
  
  update = (currentCar, car) => {
      return new Promise((res, rej) => {
          currentCar.model = car.model ?? currentCar.model;
          currentCar.hp = car.hp ?? currentCar.hp;
          currentCar.year = car.year ?? currentCar.year;
          currentCar.brand = car.brand ?? currentCar.brand;
          res();
      })
  }
  
  remove = (car) => {
      return new Promise((res, rej) => {
          data = data.filter(c => c.id != car.id)
          res()
      })
  }
  
  module.exports = {
    findAll,
    findFiltered,
    findById,
    create,
    update,
    remove,
  };
  