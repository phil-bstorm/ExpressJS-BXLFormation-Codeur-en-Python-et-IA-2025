const {
  models: { brands },
} = require("../models");

const findAll = () => {
  return brands.findAll();
};

const findAllFiltered = (filters) => {
  const where = {};
  if (filters.name) {
    where.name = filters.name;
  }
  return brands.findAll({ where });
};

const findById = (id) => {
  return brands.findByPk(id);
};

const create = (newBrand) => {
  return brands.create(newBrand);
};

const update = (brand, newBrand) => {
  brand.name = newBrand.name ?? brand.name;

  return brand.update(newBrand);
};

const remove = (brand) => {
  return brand.destroy();
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
