const { PrismaClient: PrismaClientProduct } = require('@prisma/client');
const prismaProduct = new PrismaClientProduct();

module.exports = {
  async index(req, res) {
    const products = await prismaProduct.product.findMany();
    res.json(products);
  },
  async store(req, res) {
    const { name, price } = req.body;
    const product = await prismaProduct.product.create({
      data: { name, price: parseFloat(price) },
    });
    res.json(product);
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, price } = req.body;
    const product = await prismaProduct.product.update({
      where: { id: parseInt(id) },
      data: { name, price: parseFloat(price) },
    });
    res.json(product);
  },
  async destroy(req, res) {
    const { id } = req.params;
    await prismaProduct.product.delete({ where: { id: parseInt(id) } });
    res.send('Produto deletado');
  }
};
