import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Home from './pages/Home';
import Categorias from './components/Categorias';
import Fornecedores from './components/Fornecedores';
import './App.css';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setAuthenticated(true);
      const role = localStorage.getItem('user_role');
      setUserRole(role);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {authenticated ? (
          <>
            <Sidebar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                
                {/* Rotas para Categorias e Fornecedores para administradores */}
                {userRole === 'admin' && (
                  <>
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/fornecedores" element={<Fornecedores />} />
                  </>
                )}
              </Routes>
            </div>
          </>
        ) : (
          <div>Por favor, faça login para acessar o sistema.</div>
        )}
      </div>
    </Router>
  );
};

export default App;
