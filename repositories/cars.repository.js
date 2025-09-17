const {
  models: { cars, brands },
} = require("../models/");

//INTERNAL
findNextId = () => {
  const car = data?.at(-1);
  if (!car) return 1;
  else return user.id + 1;
};
//

findAll = () => {
  return cars.findAll({
    include: [
      {
        model: brands,
        as: "brand",
      },
    ],
  });
};

findFiltered = (filters) => {
  /*const predicate = [];
  if (filters.brand)
    predicate.push((c) => c.brand.toLowerCase() == filters.brand.toLowerCase());
  if (filters.model)
    predicate.push((c) => c.model.toLowerCase() == filters.model.toLowerCase());
  if (filters.minHp) predicate.push((c) => c.hp >= filters.minHp);
  if (filters.maxHp) predicate.push((c) => c.hp <= filters.maxHp);
  if (filters.minYear) predicate.push((c) => c.year >= filters.minYear);
  if (filters.maxYear) predicate.push((c) => c.year <= filters.maxYear);

  return new Promise((res, rej) => {
    const result = data.filter((c) => predicate.every((p) => p(c)));
    res(result);
  });*/

  const where = {};

  const brandInclude = {
    model: brands,
    as: "brand",
    where: {},
  };
  const include = [brandInclude];
  if (filters.brand) {
    brandInclude.where.name = filters.brand;
  }

  if (filters.model) {
    where.model = filters.model;
  }

  if (filters.minHp || filters.maxHp) {
    where.hp = {};
    if (filters.maxHp) {
      where.hp[Op.lte] = filters.maxHp;
    }
    if (filters.minHp) {
      where.hp[Op.gte] = filters.minHp;
    }
  }

  if (filters.minYear || filters.maxYear) {
    where.year = {};
    if (filters.maxYear) {
      where.year[Op.lte] = filters.maxYear;
    }
    if (filters.minYear) {
      where.year[Op.gte] = filters.minYear;
    }
  }

  console.log(where);

  // SELECT * FROM cars WHERE year >= 1999
  return cars.findAll({
    where,
    include,
  });
};

findById = (id) => {
  return cars.findByPk(id);
};

create = (car) => {
  return cars.create(car);
};

update = (currentCar, car) => {
  /*return new Promise((res, rej) => {
    currentCar.model = car.model ?? currentCar.model;
    currentCar.hp = car.hp ?? currentCar.hp;
    currentCar.year = car.year ?? currentCar.year;
    currentCar.brand = car.brand ?? currentCar.brand;
    res();
  });*/

  currentCar.model = car.model ?? currentCar.model;
  currentCar.hp = car.hp ?? currentCar.hp;
  currentCar.year = car.year ?? currentCar.year;
  if (car.brand_id !== undefined) currentCar.brand_id = car.brand_id; // authorise la valeur "null"

  return currentCar.save();
};

remove = (car) => {
  return car.destroy();
};

module.exports = {
  findAll,
  findFiltered,
  findById,
  create,
  update,
  remove,
};
