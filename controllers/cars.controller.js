const carsService = require("../services/cars.services");
const apiCallResult = require("../responses/apiCallResult.response");

const findAll = async (req, res) => {
  const result = await carsService.findAll(req.query);
  return apiCallResult(res, result);
};

const findOne = async (req, res) => {
  const result =  await carsService.findOneById(req.params.id);
  return apiCallResult(res, result);
};

const create = async (req, res) => {
  const result = await carsService.create(req.body);
  return apiCallResult(res, result);
};

const update = async (req, res) => {
  const result = await carsService.update(req.params.id, req.body);
  return apiCallResult(res, result);
};

const remove = async (req, res) => {
  const result = await carsService.remove(req.params.id);
  return apiCallResult(res, result);
};

module.exports = {
  findAll,
  findOne,
  create,
  remove,
  update,
};
