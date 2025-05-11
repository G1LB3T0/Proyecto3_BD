import React from 'react';
import Accesos from './components/reportes/Accesos';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 style={{ textAlign: 'center' }}>📚 Reportes de Biblioteca</h1>
      <Accesos />
    </div>
  );
};

export default App;



