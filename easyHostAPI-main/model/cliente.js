const { DataTypes } = require("sequelize");

const db = require("./db/conn");

const cliente = db.define("cliente", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

module.exports = cliente;
