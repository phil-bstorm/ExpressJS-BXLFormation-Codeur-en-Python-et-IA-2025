const { DataTypes } = require("sequelize");

const users = (sequelize) => {
  return sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
      },
      firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      alias: {
        type: DataTypes.STRING(50),
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = users;
