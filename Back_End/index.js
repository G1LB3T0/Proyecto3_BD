const express = require('express');
const { PrismaClient } = require('./generated/prisma');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/categorias', async (req, res) => {
  try {
    const categorias = await prisma.categoria.findMany();
    res.json(categorias);
  } catch (err) {
    console.error('Error al obtener categorías:', err);
    res.status(500).json({ error: 'Error al consultar categorías' });
  }
});

app.get('/tabla/:nombre', async (req, res) => {
  const { nombre } = req.params;

  try {
    const datos = await prisma[nombre].findMany();
    res.json(datos);
  } catch (err) {
    console.error(`Error al consultar la tabla '${nombre}':`, err);
    res.status(500).json({ error: `Tabla '${nombre}' no encontrada o consulta fallida` });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});