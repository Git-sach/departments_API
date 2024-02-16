const { Sequelize, Model } = require("sequelize");
const sequelize = require("../index");

export class Region extends Model {}

Region.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "regions",
    timestamps: false,
  }
);