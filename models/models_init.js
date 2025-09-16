const _users = require("./users.model");

const initModels = (sequelize) => {
  const users = _users(sequelize);
  // cars
  // brands

  return { users };
};

module.exports = initModels;
