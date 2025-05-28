const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    const users = await prisma.user.findMany();
    res.json(users);
  },
  async store(req, res) {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, email },
    });
    res.json(user);
  },
  async destroy(req, res) {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: parseInt(id) } });
    res.send('Usuário deletado');
  }
};