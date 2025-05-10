import React, { useEffect, useState } from 'react';
import { getReporteAccesos } from '../../services/api';
import { exportToPDF } from '../../utils/exportToPDF';
import { exportToCSV } from '../../utils/exportToCSV';

const Accesos = () => {
  const [filtros, setFiltros] = useState({
    tipo_acceso: '',
    id_usuario: '',
    fecha_inicio: '',
    fecha_fin: ''
  });

  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);

  const obtenerDatos = async () => {
    setLoading(true);
    try {
      const { data } = await getReporteAccesos(filtros);
      setDatos(data);
    } catch (error) {
      console.error('Error cargando accesos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    obtenerDatos();
  };

  return (
    <div>
      <h2>📊 Reporte: Historial de Accesos</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <label>
          Tipo de Acceso:
          <input name="tipo_acceso" onChange={handleChange} value={filtros.tipo_acceso} />
        </label>{' '}
        <label>
          ID Usuario:
          <input name="id_usuario" onChange={handleChange} value={filtros.id_usuario} />
        </label>{' '}
        <label>
          Fecha Inicio:
          <input type="date" name="fecha_inicio" onChange={handleChange} value={filtros.fecha_inicio} />
        </label>{' '}
        <label>
          Fecha Fin:
          <input type="date" name="fecha_fin" onChange={handleChange} value={filtros.fecha_fin} />
        </label>{' '}
        <button type="submit">🔍 Filtrar</button>
      </form>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => exportToPDF('reporte-accesos')}>📄 Exportar PDF</button>{' '}
        <button onClick={() => exportToCSV(datos)}>📊 Exportar Excel</button>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div id="reporte-accesos">
          <table border="1" cellPadding="6" style={{ width: '100%', textAlign: 'left' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Libro</th>
                <th>Fecha</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((a) => (
                <tr key={a.id_acceso}>
                  <td>{a.id_acceso}</td>
                  <td>{a.usuario?.nombre} {a.usuario?.apellido}</td>
                  <td>{a.usuario?.email}</td>
                  <td>{a.libro?.titulo}</td>
                  <td>{a.fecha_consulta?.slice(0, 10)}</td>
                  <td>{a.tipo_acceso}</td>
                </tr>
              ))}
              {datos.length === 0 && (
                <tr><td colSpan="6">No hay resultados.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Accesos;
