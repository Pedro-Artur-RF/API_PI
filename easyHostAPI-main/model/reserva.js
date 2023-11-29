const { DataTypes } = require("sequelize");

const db = require("./db/conn");

const reserva = db.define("reserva", {
  IDcliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    require: true,
  },
  numQuarto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    require: true,
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    require: true,
  },
});

module.exports = reserva;
