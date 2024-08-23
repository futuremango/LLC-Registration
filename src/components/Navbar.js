import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">BUSINESS OMNI</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li className="dropdown">
          <Link to="/services">SERVICES</Link>
          <div className="dropdown-content">
            <Link to="/services/business-formation">Business Formation</Link>
            <Link to="/services/boi-report">BOI Report Filing</Link>
            <Link to="/services/annual-reports">Annual Reports</Link>
            <Link to="/services/compliance">Compliance</Link>
            <Link to="/services/registered-agents">Registered Agents</Link>
            <Link to="/services/operating-agreements">Operating Agreements</Link>
          </div>
        </li>
        <li><Link to="/why-omni">WHY OMNI</Link></li>
        <li><Link to="/support">SUPPORT</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
