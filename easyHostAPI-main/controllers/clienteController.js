const { response } = require("express");
const cliente = require("../model/cliente");

module.exports = {
  async createcliente(req, res) {
    const { nome, email } = req.body;

    const cliente = await cliente.create({
      nome,
      email,
    });

    return res.json(cliente);
  },

  async findAllcliente(req, res) {
    const cliente = await cliente.findAll({ raw: true });

    return res.json(cliente);
  },

  async findcliente(req, res) {
    const { id } = req.params;

    const cliente = await cliente.findOne({ where: { id: id } });

    return res.json(cliente);
  },

  async updatecliente(req, res) {
    const { id } = req.params;
    const { nome, email } = req.body;

    const cliente = await cliente.update(
      {
        nome,
        email,
      },
      {
        where: { id: id },
      }
    );

    return res.json(cliente);
  },

  async deletecliente(req, res) {
    const { id } = req.params;
    const cliente = await cliente.destroy({ where: { id: id } });

    return res.json({ message: "Usuário deletado com sucesso" });
  },
};
