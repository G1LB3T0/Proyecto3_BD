import React, { useEffect, useState } from 'react';
import { getReporteAccesos } from '../../services/api';
import { exportToPDF } from '../../utils/exportToPDF';
import { exportToCSV } from '../../utils/exportToCSV';
import GraficasAccesos from './GraficasAccesos';
import './Accesos.css';

const Accesos = () => {
  const [filtros, setFiltros] = useState({
    tipo_acceso: '',
    id_usuario: '',
    fecha_inicio: '',
    fecha_fin: ''
  });
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [vistaActual, setVistaActual] = useState('tabla'); 

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

  const handleReset = () => {
    setFiltros({
      tipo_acceso: '',
      id_usuario: '',
      fecha_inicio: '',
      fecha_fin: ''
    });
  };

  return (
    <div className="reportes-container">
      <header className="reportes-header">
        <div className="reportes-title">
          <span className="icon">📚</span>
          <h1>Reportes de Biblioteca</h1>
        </div>
      </header>

      <div className="reporte-section">
        <h2 className="reporte-title"><span className="icon">📊</span> Reporte: Historial de Accesos</h2>
        
        <div className="vista-selector">
          <button 
            className={`vista-btn ${vistaActual === 'tabla' ? 'active' : ''}`}
            onClick={() => setVistaActual('tabla')}
          >
            <span className="icon">📋</span> Vista Tabla
          </button>
          <button 
            className={`vista-btn ${vistaActual === 'graficas' ? 'active' : ''}`}
            onClick={() => setVistaActual('graficas')}
          >
            <span className="icon">📈</span> Vista Gráficas
          </button>
        </div>
        
        <div className="filters-section">
          <div className="filters-header">
            <button 
              type="button"
              className="toggle-filters-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'} <span>{showFilters ? '▲' : '▼'}</span>
            </button>
          </div>
          
          {showFilters && (
            <form onSubmit={handleSubmit} className="filters-panel">
              <div className="filter-group">
                <label htmlFor="tipo_acceso">Tipo de Acceso:</label>
                <select
                  id="tipo_acceso"
                  name="tipo_acceso"
                  value={filtros.tipo_acceso}
                  onChange={handleChange}
                >
                  <option value="">Todos</option>
                  <option value="Lectura">Lectura</option>
                  <option value="Descarga">Descarga</option>
                  <option value="Visualización">Visualización</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label htmlFor="id_usuario">ID/Nombre Usuario:</label>
                <input
                  type="text"
                  id="id_usuario"
                  name="id_usuario"
                  value={filtros.id_usuario}
                  onChange={handleChange}
                  placeholder="Buscar por ID o nombre"
                />
              </div>
              
              <div className="filter-group date-range">
                <div className="date-input">
                  <label htmlFor="fecha_inicio">Fecha Inicio:</label>
                  <input
                    type="date"
                    id="fecha_inicio"
                    name="fecha_inicio"
                    value={filtros.fecha_inicio}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="date-input">
                  <label htmlFor="fecha_fin">Fecha Fin:</label>
                  <input
                    type="date"
                    id="fecha_fin"
                    name="fecha_fin"
                    value={filtros.fecha_fin}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="filter-actions">
                <button type="submit" className="filter-btn primary">
                  <span className="icon">🔍</span> Filtrar
                </button>
                <button type="button" className="filter-btn secondary" onClick={handleReset}>
                  <span className="icon">↻</span> Reiniciar
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="export-buttons">
          <button 
            className="export-btn pdf" 
            onClick={() => exportToPDF('reporte-accesos')}
            disabled={datos.length === 0}
          >
            <span className="icon">📄</span> Exportar PDF
          </button>
          <button 
            className="export-btn excel" 
            onClick={() => exportToCSV(datos)}
            disabled={datos.length === 0}
          >
            <span className="icon">📊</span> Exportar Excel
          </button>
        </div>

        {loading ? (
          <div className="loading">
            <p>Cargando datos...</p>
          </div>
        ) : (
          <>
            {vistaActual === 'tabla' ? (
              <div className="table-container" id="reporte-accesos">
                <table className="data-table">
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
                    {datos.length > 0 ? datos.map((a) => (
                      <tr key={a.id_acceso}>
                        <td>{a.id_acceso}</td>
                        <td>{a.usuario?.nombre} {a.usuario?.apellido}</td>
                        <td>{a.usuario?.email}</td>
                        <td>{a.libro?.titulo}</td>
                        <td>{a.fecha_consulta?.slice(0, 10)}</td>
                        <td>
                          <span className={`tipo-badge ${a.tipo_acceso?.toLowerCase()}`}>
                            {a.tipo_acceso}
                          </span>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan="6" className="no-results">No hay resultados.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <GraficasAccesos datos={datos} />
            )}
            
            {vistaActual === 'tabla' && datos.length > 0 && (
              <div className="pagination">
                <button className="page-btn">&laquo;</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">&raquo;</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Accesos;