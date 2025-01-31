const { Sequelize } = require("sequelize");
const database = require("../../db");

const Usuario = database.define(
  "usuarios",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, 
  }
);

module.exports = Usuario;
