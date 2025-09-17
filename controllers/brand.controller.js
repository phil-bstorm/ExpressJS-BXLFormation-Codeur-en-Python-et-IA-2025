const brandsService = require("../services/brands.services");
const apiCallResult = require("../responses/apiCallResult.response");

const findAll = async (req, res) => {
  const result = await brandsService.findAll(req.query);
  return apiCallResult(res, result);
};

const findOne = async (req, res) => {
  const result = await brandsService.findOneById(req.params.id);
  return apiCallResult(res, result);
};

const create = async (req, res) => {
  const result = await brandsService.create(req.body);
  return apiCallResult(res, result);
};

const update = async (req, res) => {
  const result = await brandsService.update(req.params.id, req.body);
  return apiCallResult(res, result);
};

const remove = async (req, res) => {
  const result = await brandsService.remove(req.params.id);
  return apiCallResult(res, result);
};

module.exports = {
  findAll,
  findOne,
  create,
  remove,
  update,
};
