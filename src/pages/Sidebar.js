import React from 'react';
import { Link } from 'react-router-dom';
import { FaTags, FaTruck } from 'react-icons/fa';
import './Sidebar.css'; // Arquivo de estilos CSS para a sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/categorias" className="sidebar-item">
        <div className="sidebar-item-content">
          <FaTags className="sidebar-icon" />
          <span className="sidebar-text">Categorias</span>
        </div>
      </Link>
      <Link to="/fornecedores" className="sidebar-item">
        <div className="sidebar-item-content">
          <FaTruck className="sidebar-icon" />
          <span className="sidebar-text">Fornecedores</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
