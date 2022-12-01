import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [ddOpen, setDdOpen] = useState(false);

    return (
        <>
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="navbar-title">
                        <Link to="/">
                            <h1>STORE</h1>
                        </Link>
                    </div>
                    <div className="navbar-links-container">
                        <div className="navbar-links">
                            <div>
                                <Link to="/">Inicio</Link>
                            </div>
                            <div>
                                <Link onClick={() => setDdOpen(!ddOpen)}>
                                    Productos
                                </Link>
                                <div
                                    className="dd-menu"
                                    style={
                                        ddOpen
                                            ? { display: "flex" }
                                            : { display: "none" }
                                    }
                                >
                                    <Link
                                        to="/productos"
                                        onClick={() => setDdOpen(!ddOpen)}
                                    >
                                        Todos
                                    </Link>
                                    <Link
                                        to="/category/mouse"
                                        onClick={() => setDdOpen(!ddOpen)}
                                    >
                                        Mouses
                                    </Link>
                                    <Link
                                        to="/category/teclados"
                                        onClick={() => setDdOpen(!ddOpen)}
                                    >
                                        Teclados
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <Link to="/contacto">Contacto</Link>
                            </div>
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
            {open ? (
                <div className="menu-container">
                    <div className="menu-content">
                        <Link to="/" onClick={() => setOpen(!open)}>
                            Inicio
                        </Link>
                        <Link to="/productos" onClick={() => setOpen(!open)}>
                            Productos
                        </Link>
                        <Link to="/contacto" onClick={() => setOpen(!open)}>
                            Contacto
                        </Link>
                    </div>
                </div>
            ) : undefined}
        </>
    );
};

export default NavBar;
