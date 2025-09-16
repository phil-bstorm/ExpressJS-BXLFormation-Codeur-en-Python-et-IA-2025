const _users = require("./users.model");
const _cars = require("./cars.model");
const _brands = require("./brand.model");

const initModels = (sequelize) => {
  const brands = _brands(sequelize);
  const users = _users(sequelize);
  const cars = _cars(sequelize);

  // Relations
  cars.belongsTo(brands, { as: "brand", foreignKey: "brand_id" });
  brands.hasMany(cars, { as: "cars", foreignKey: "brand_id" });

  return { users, cars, brands };
};

module.exports = initModels;
