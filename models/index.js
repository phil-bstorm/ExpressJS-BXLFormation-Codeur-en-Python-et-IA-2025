const sequelize = require("../config/database");
const initModels = require("./models_init");

const models = initModels(sequelize);

module.exports = { sequelize, models };
