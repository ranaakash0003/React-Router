import React from "react";
import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
        <div className="container">
            <Link className="brand-logo">Poke's time</Link>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </nav>
  );
}
export default Navbar;
