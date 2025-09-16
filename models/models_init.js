const _users = require("./users.model");
const _cars = require("./cars.model");

const initModels = (sequelize) => {
  const users = _users(sequelize);
  const cars = _cars(sequelize);
  // brands

  return { users, cars };
};

module.exports = initModels;
