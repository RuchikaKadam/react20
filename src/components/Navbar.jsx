import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import logo from '../assets/logo_navbar.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="vertical-centre" style={{ gap: "1rem" }}>
        <img src={logo} alt="GeekFoods Logo" />
        <span>GeekFoods</span>
      </div>

      <div className="nav-links vertical-centre">
        <div><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/quote">Quote</Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/restaurant">Restaurant</Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/foods">Foods</Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact">Contact</Link></div>
      </div>

      <div className="vertical-centre">
        <Button borderRadius={"10px"} backgroundColor={"#1c4ed8"} fontColor={"#FFFFFF"}>Get Started</Button>
      </div>
    </nav>
  );
}

export default Navbar;
