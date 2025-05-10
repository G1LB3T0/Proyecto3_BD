// controllers/reportes.controller.js

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// 1. Historial de accesos (GET /reportes/accesos)
async function reporteHistorialAccesos(req, res) {
  try {
    const { tipo_acceso, fecha_inicio, fecha_fin, id_usuario } = req.query;

    const where = {};
    if (tipo_acceso) {
      where.tipo_acceso = tipo_acceso;
    }
    if (fecha_inicio || fecha_fin) {
      where.fecha_consulta = {};
      if (fecha_inicio) {
        const d = new Date(fecha_inicio);
        if (isNaN(d.getTime())) {
          return res.status(400).json({ error: 'Formato de fecha_inicio inválido' });
        }
        where.fecha_consulta.gte = d;
      }
      if (fecha_fin) {
        const d = new Date(fecha_fin);
        if (isNaN(d.getTime())) {
          return res.status(400).json({ error: 'Formato de fecha_fin inválido' });
        }
        where.fecha_consulta.lte = d;
      }
    }
    if (id_usuario) {
      const u = parseInt(id_usuario, 10);
      if (isNaN(u)) {
        return res.status(400).json({ error: 'id_usuario debe ser un número válido' });
      }
      where.id_usuario = u;
    }

    const accesos = await prisma.historial_acceso.findMany({
      where,
      include: { usuario: true, libro: true }
    });

    return res.json(accesos);
  } catch (error) {
    console.error('Error en reporteHistorialAccesos:', error);
    return res.status(500).json({
      error: 'Error en reporteHistorialAccesos',
      detalle: error.message
    });
  }
}

// 2. Préstamos (GET /reportes/prestamos)
async function reportePrestamos(req, res) {
  try {
    const { estado_prestamo, fecha_inicio, fecha_fin, id_usuario } = req.query;

    const where = {};
    if (estado_prestamo) {
      where.estado_prestamo = estado_prestamo;
    }
    if (fecha_inicio || fecha_fin) {
      where.fecha_prestamo = {};
      if (fecha_inicio) {
        const d = new Date(fecha_inicio);
        if (isNaN(d.getTime())) {
          return res.status(400).json({ error: 'Formato de fecha_inicio inválido' });
        }
        where.fecha_prestamo.gte = d;
      }
      if (fecha_fin) {
        const d = new Date(fecha_fin);
        if (isNaN(d.getTime())) {
          return res.status(400).json({ error: 'Formato de fecha_fin inválido' });
        }
        where.fecha_prestamo.lte = d;
      }
    }
    if (id_usuario) {
      const u = parseInt(id_usuario, 10);
      if (isNaN(u)) {
        return res.status(400).json({ error: 'id_usuario debe ser un número válido' });
      }
      where.id_usuario = u;
    }

    const prestamos = await prisma.prestamo.findMany({
      where,
      include: {
        usuario: true,
        prestamo_unidadlibro: {
          include: {
            unidadlibro: {
              include: { libro: true }
            }
          }
        }
      }
    });

    return res.json(prestamos);
  } catch (error) {
    console.error('Error en reportePrestamos:', error);
    return res.status(500).json({
      error: 'Error en reportePrestamos',
      detalle: error.message
    });
  }
}

// 3. Libros más prestados (GET /reportes/libros-mas-prestados)
async function reporteLibrosMasPrestados(req, res) {
  try {
    const { fecha_inicio, fecha_fin, id_categoria, id_editorial } = req.query;

    const fi = fecha_inicio ? new Date(fecha_inicio) : null;
    const ff = fecha_fin    ? new Date(fecha_fin)    : null;
    const cat = id_categoria ? parseInt(id_categoria, 10) : null;
    const edi = id_editorial ? parseInt(id_editorial, 10) : null;

    if ((fecha_inicio && isNaN(fi?.getTime())) ||
        (fecha_fin    && isNaN(ff?.getTime()))) {
      return res.status(400).json({ error: 'fecha_inicio o fecha_fin inválida' });
    }
    if ((id_categoria && isNaN(cat)) ||
        (id_editorial && isNaN(edi))) {
      return res.status(400).json({
        error: 'id_categoria e id_editorial deben ser números válidos'
      });
    }

    const libros = await prisma.$queryRaw`
      SELECT
        l.id_libro,
        l.titulo,
        COUNT(pul.id_unidad)::BIGINT AS total_prestamos
      FROM libro l
      JOIN unidadlibro ul      ON ul.id_libro    = l.id_libro
      JOIN prestamo_unidadlibro pul ON pul.id_unidad = ul.id_unidad
      JOIN prestamo p          ON p.id_prestamo  = pul.id_prestamo
      WHERE (${fi}::date IS NULL OR p.fecha_prestamo >= ${fi}::date)
        AND (${ff}::date IS NULL OR p.fecha_prestamo <= ${ff}::date)
        AND (${cat}::int  IS NULL OR l.id_categoria = ${cat}::int)
        AND (${edi}::int  IS NULL OR l.id_editorial = ${edi}::int)
      GROUP BY l.id_libro, l.titulo
      ORDER BY total_prestamos DESC
      LIMIT 10
    `;

    // Prisma devuelve total_prestamos como BigInt; convertimos a Number
    const result = libros.map(r => ({
      id_libro:       r.id_libro,
      titulo:         r.titulo,
      total_prestamos: Number(r.total_prestamos)
    }));

    return res.json(result);
  } catch (error) {
    console.error('Error en reporteLibrosMasPrestados:', error);
    return res.status(500).json({
      error: 'Error en reporteLibrosMasPrestados',
      detalle: error.message
    });
  }
}

// 4. Reservas activas (GET /reportes/reservas)
async function reporteReservasActivas(req, res) {
  try {
    const { fecha_inicio, fecha_fin, id_usuario, estado_reserva } = req.query;

    const where = {
      estado_reserva: estado_reserva || 'Activa'
    };
    if (fecha_inicio || fecha_fin) {
      where.fecha_reserva = {};
      if (fecha_inicio) {
        const d = new Date(fecha_inicio);
        if (isNaN(d.getTime())) {
          return res.status(400).json({ error: 'Formato de fecha_inicio inválido' });
        }
        where.fecha_reserva.gte = d;
      }
      if (fecha_fin) {
        const d = new Date(fecha_fin);
        if (isNaN(d.getTime())) {
          return res.status(400).json({ error: 'Formato de fecha_fin inválido' });
        }
        where.fecha_reserva.lte = d;
      }
    }
    if (id_usuario) {
      const u = parseInt(id_usuario, 10);
      if (isNaN(u)) {
        return res.status(400).json({ error: 'id_usuario debe ser un número válido' });
      }
      where.id_usuario = u;
    }

    const reservas = await prisma.reserva.findMany({
      where,
      include: {
        usuario: true,
        unidadlibro: {
          include: { libro: true }
        }
      }
    });

    return res.json(reservas);
  } catch (error) {
    console.error('Error en reporteReservasActivas:', error);
    return res.status(500).json({
      error: 'Error en reporteReservasActivas',
      detalle: error.message
    });
  }
}

// 5. Usuarios activos (GET /reportes/usuarios-activos)
async function reporteUsuariosActivos(req, res) {
  try {
    const {
      fecha_inicio,
      fecha_fin,
      min_prestamos  = '0',
      min_reservas   = '0',
      nombre
    } = req.query;

    const minP = parseInt(min_prestamos, 10);
    const minR = parseInt(min_reservas,  10);
    if (isNaN(minP) || isNaN(minR)) {
      return res.status(400).json({
        error: 'min_prestamos y min_reservas deben ser números válidos'
      });
    }

    let fi = null, ff = null;
    if (fecha_inicio) {
      fi = new Date(fecha_inicio);
      if (isNaN(fi.getTime())) {
        return res.status(400).json({ error: 'fecha_inicio inválida' });
      }
    }
    if (fecha_fin) {
      ff = new Date(fecha_fin);
      if (isNaN(ff.getTime())) {
        return res.status(400).json({ error: 'fecha_fin inválida' });
      }
    }

    const usuariosRaw = await prisma.$queryRaw`
      SELECT
        u.id_usuario,
        u.nombre,
        u.apellido,
        COUNT(DISTINCT p.id_prestamo)::BIGINT AS total_prestamos,
        COUNT(DISTINCT r.id_reserva)::BIGINT  AS total_reservas
      FROM usuario u
      LEFT JOIN prestamo p ON p.id_usuario = u.id_usuario
        AND (${fi}::date IS NULL OR p.fecha_prestamo >= ${fi}::date)
        AND (${ff}::date IS NULL OR p.fecha_prestamo <= ${ff}::date)
      LEFT JOIN reserva r ON r.id_usuario = u.id_usuario
        AND (${fi}::date IS NULL OR r.fecha_reserva >= ${fi}::date)
        AND (${ff}::date IS NULL OR r.fecha_reserva <= ${ff}::date)
      WHERE (${nombre || null}::text IS NULL OR u.nombre ILIKE ${'%' + (nombre || '') + '%'})
      GROUP BY u.id_usuario
      HAVING COUNT(DISTINCT p.id_prestamo) >= ${minP}
         AND COUNT(DISTINCT r.id_reserva)  >= ${minR}
      ORDER BY total_prestamos DESC, total_reservas DESC
      LIMIT 10
    `;

    // Convertir BigInt a Number
    const usuarios = usuariosRaw.map(u => ({
      id_usuario:      u.id_usuario,
      nombre:          u.nombre,
      apellido:        u.apellido,
      total_prestamos: Number(u.total_prestamos),
      total_reservas:  Number(u.total_reservas)
    }));

    return res.json(usuarios);
  } catch (error) {
    console.error('Error en reporteUsuariosActivos:', error);
    return res.status(500).json({
      error: 'Error en reporteUsuariosActivos',
      detalle: error.message
    });
  }
}

module.exports = {
  reporteHistorialAccesos,
  reportePrestamos,
  reporteLibrosMasPrestados,
  reporteReservasActivas,
  reporteUsuariosActivos
};
