import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="navbar-title">
                        <h1>STORE</h1>
                    </div>
                    <div className="navbar-links-container">
                        <div className="navbar-links">
                            <Link to="/">Inicio</Link>
                            <Link to="/productos">Productos</Link>
                            <Link to="/contacto">Contacto</Link>
                        </div>
                    </div>
                    <div className="container-burguer-menu">
                        <button
                            onClick={() => setOpen(!open)}
                            className={`burgermenu ${open ? "opened" : ""}`}
                        >
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            {open ? <div className="menu-container">
                        <div className="menu-content">
                            <Link to="/" onClick={() => setOpen(!open)}>Inicio</Link>
                            <Link to="/productos" onClick={() => setOpen(!open)}>Productos</Link>
                            <Link to="/contacto" onClick={() => setOpen(!open)}>Contacto</Link>
                        </div>
                    </div> 
            : undefined}
        </>
    );
};

export default NavBar;
