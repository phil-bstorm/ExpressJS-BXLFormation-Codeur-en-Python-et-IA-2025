const serviceCallResult = require("../responses/serviceCallResult.response");
const brandRepository = require("../repositories/brand.repository");

const findAll = async (filters) => {
  if (JSON.stringify(filters) !== "{}") {
    const result = await brandRepository.findAllFiltered(filters);
    return serviceCallResult.ok(result);
  }

  const result = await brandRepository.findAll();
  return serviceCallResult.ok(result);
};

const findOneById = async (id) => {
  const brand = await brandRepository.findById(id);

  if (!brand)
    return serviceCallResult.notFound(`brand with id #${id} not found`);

  return serviceCallResult.ok(brand);
};

const create = async (brand = {}) => {
  const { name } = brand;
  if (name) {
    await brandRepository.create(brand);
    return serviceCallResult.created();
  }
  return serviceCallResult.badRequest("A brand must have a name");
};

const update = async (id, newBrand = {}) => {
  const brand = await brandRepository.findById(id);
  if (!brand)
    return serviceCallResult.notFound(`brand with id #${id} not found`);

  await brandRepository.update(brand, newBrand);

  return serviceCallResult.noContent();
};

const remove = async (id) => {
  const brand = await brandRepository.findById(id);

  if (!brand)
    return serviceCallResult.notFound(`brand with id #${id} not found`);
  await brandRepository.remove(brand);
  return serviceCallResult.noContent();
};

module.exports = {
  findAll,
  findOneById,
  create,
  update,
  remove,
};
