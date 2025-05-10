

const express = require('express');
const {
  reporteHistorialAccesos,
  reportePrestamos,
  reporteLibrosMasPrestados,
  reporteReservasActivas,
  reporteUsuariosActivos
} = require('./controllers/reportes.controller');

const app = express();
app.use(express.json());

// Rutas de reportes (coinciden con tus controladores)
app.get('/reportes/historial-accesos',    reporteHistorialAccesos);
app.get('/reportes/prestamos',             reportePrestamos);
app.get('/reportes/libros-mas-prestados',  reporteLibrosMasPrestados);
app.get('/reportes/reservas-activas',      reporteReservasActivas);
app.get('/reportes/usuarios-activos',      reporteUsuariosActivos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
