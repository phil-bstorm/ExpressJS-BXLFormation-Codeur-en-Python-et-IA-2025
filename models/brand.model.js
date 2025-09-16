const { DataTypes } = require("sequelize");

const brands = (sequelize) => {
  return sequelize.define(
    "brands",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        // unique: true, mentionner dans indexes
      },
    },
    {
      tableName: "brand",
      schema: "public", // valeur par défaut "public"
      indexes: [
        {
          name: "brand_name_ix",
          unique: true,
          fields: [{ name: "name" }],
        },
      ],
    }
  );
};

module.exports = brands;
