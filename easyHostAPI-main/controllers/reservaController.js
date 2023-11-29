const { response } = require("express");
const reserva = require("../model/reserva");

module.exports = {
  async createreserva(req, res) {
    const { idCliente, numQuarto, valor } = req.body;

    const reserva = await reserva.create({
      idCliente,
      numQuarto,
      valor
    });
ss
    return res.json(reserva);
  },

  async findAllreserva(req, res) {
    const reserva = await reserva.findAll({ raw: true });

    return res.json(reserva);
  },

  async findreserva(req, res) {
    const { id } = req.params;

    const reserva = await reserva.findOne({ where: { id: id } });

    return res.json(reserva);
  },

  async updatereserva(req, res) {
    const { id } = req.params;
    const { idCliente, numQuarto, valor } = req.body;

    const reserva = await reserva.update(
      {
        idCliente,
        numQuarto,
        valor
      },
      {
        where: { id: id },
      }
    );

    return res.json(reserva);
  },

  async deletereserva(req, res) {
    const { id } = req.params;
    const reserva = await reserva.destroy({ where: { id: id } });

    return res.json({ message: "Usuário deletado com sucesso" });
  },
};
