const { Sequelize, Model } = require("sequelize");
const sequelize = require("../index");
import { Region } from "../model/region";

export class Department extends Model {}

Department.init(
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
    code: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    prefecture: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    svg_path: {
      type: Sequelize.STRING,
    },
    viewBox00: {
      type: Sequelize.INTEGER,
    },
    viewBox01: {
      type: Sequelize.INTEGER,
    },
    viewBox10: {
      type: Sequelize.INTEGER,
    },
    viewBox11: {
      type: Sequelize.INTEGER,
    },
    regionId: {
      type: Sequelize.INTEGER,
      references: {
        model: Region,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "departments",
    timestamps: false,
  }
);

Department.belongsTo(Region, { foreignKey: "regionId" });
