const usersService = require("../services/users.services");
const apiCallResult = require("../responses/apiCallResult.response");

const findAll = async (req, res) => {
  const result = await usersService.findAll(req.query);
  return apiCallResult(res, result);
};

const findOne = async(req, res) => {
  const result = await usersService.findOneById(req.params.id);
  return apiCallResult(res, result);
};

const create = async(req, res) => {
  const result = await usersService.create(req.body);
  return apiCallResult(res, result);
};

const update = async(req, res) => {
  const result = await usersService.update(req.params.id, req.body);
  return apiCallResult(res, result);
};

const remove = async(req, res) => {
  const result = await usersService.remove(req.params.id);
  return apiCallResult(res, result);
};

module.exports = {
  findAll,
  findOne,
  update,
  remove,
  create,
};
