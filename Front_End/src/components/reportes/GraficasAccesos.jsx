import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

const COLORS = ['#4a90e2', '#e25c5c', '#f4a261', '#2bb673', '#8884d8'];

const GraficasAccesos = ({ datos }) => {
  const [tipoAccesos, setTipoAccesos] = useState([]);
  const [accesosPorDia, setAccesosPorDia] = useState([]);
  const [usuariosActivos, setUsuariosActivos] = useState([]);
  const [chartType, setChartType] = useState('tipo');

  useEffect(() => {
    if (datos && datos.length > 0) {
      // Procesar datos para gráfica de tipo de acceso
      const tiposCount = {};
      datos.forEach(item => {
        const tipo = item.tipo_acceso || 'No especificado';
        tiposCount[tipo] = (tiposCount[tipo] || 0) + 1;
      });
      
      const tiposData = Object.keys(tiposCount).map(tipo => ({
        nombre: tipo,
        cantidad: tiposCount[tipo]
      }));
      setTipoAccesos(tiposData);

      // Procesar datos para gráfica de accesos por día
      const fechasCount = {};
      datos.forEach(item => {
        if (item.fecha_consulta) {
          const fecha = item.fecha_consulta.slice(0, 10); // Formato YYYY-MM-DD
          fechasCount[fecha] = (fechasCount[fecha] || 0) + 1;
        }
      });

      const fechasData = Object.keys(fechasCount)
        .sort() // Ordenar fechas cronológicamente
        .map(fecha => ({
          fecha,
          accesos: fechasCount[fecha]
        }));
      setAccesosPorDia(fechasData);

      // Procesar datos para gráfica de usuarios activos
      const usuariosCount = {};
      datos.forEach(item => {
        if (item.usuario) {
          const nombreCompleto = `${item.usuario.nombre || ''} ${item.usuario.apellido || ''}`.trim();
          usuariosCount[nombreCompleto] = (usuariosCount[nombreCompleto] || 0) + 1;
        }
      });

      const usuariosData = Object.keys(usuariosCount)
        .filter(u => u) // Filtrar usuarios sin nombre
        .map(usuario => ({ nombre: usuario, accesos: usuariosCount[usuario] }))
        .sort((a, b) => b.accesos - a.accesos)
        .slice(0, 5); // Top 5 usuarios
      
      setUsuariosActivos(usuariosData);
    }
  }, [datos]);

  return (
    <div className="graficas-container">
      <div className="graficas-tabs">
        <button 
          onClick={() => setChartType('tipo')} 
          className={`tab-btn ${chartType === 'tipo' ? 'active' : ''}`}
        >
          <span className="icon">📊</span> Por Tipo de Acceso
        </button>
        <button 
          onClick={() => setChartType('tiempo')} 
          className={`tab-btn ${chartType === 'tiempo' ? 'active' : ''}`}
        >
          <span className="icon">📈</span> Tendencia Temporal
        </button>
        <button 
          onClick={() => setChartType('usuarios')} 
          className={`tab-btn ${chartType === 'usuarios' ? 'active' : ''}`}
        >
          <span className="icon">👤</span> Usuarios Activos
        </button>
      </div>

      <div className="grafica-panel">
        {datos.length === 0 ? (
          <div className="no-data-message">
            <p>No hay datos suficientes para mostrar gráficas.</p>
          </div>
        ) : (
          <>
            {chartType === 'tipo' && (
              <div className="chart-container">
                <h3 className="chart-title">Distribución por Tipo de Acceso</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={tipoAccesos}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="cantidad"
                      nameKey="nombre"
                      label={({ nombre, percent }) => `${nombre}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {tipoAccesos.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} accesos`, 'Cantidad']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}

            {chartType === 'tiempo' && (
              <div className="chart-container">
                <h3 className="chart-title">Tendencia de Accesos por Día</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    data={accesosPorDia}
                    margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="fecha" 
                      angle={-45} 
                      textAnchor="end"
                      height={70}
                      tick={{fontSize: 12}}
                    />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} accesos`, 'Cantidad']} />
                    <Legend verticalAlign="top" height={36}/>
                    <Line 
                      type="monotone" 
                      dataKey="accesos" 
                      stroke="#4a90e2" 
                      name="Número de Accesos" 
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {chartType === 'usuarios' && (
              <div className="chart-container">
                <h3 className="chart-title">Top 5 Usuarios Activos</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={usuariosActivos}
                    margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="nombre" 
                      angle={-45} 
                      textAnchor="end" 
                      height={70}
                      tick={{fontSize: 12}}
                    />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} accesos`, 'Cantidad']} />
                    <Legend verticalAlign="top" height={36}/>
                    <Bar 
                      dataKey="accesos" 
                      name="Número de Accesos" 
                      fill="#4a90e2" 
                      barSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default GraficasAccesos;