import React from "react";
import { Link } from "react-router-dom";
import './style-components/Nav.css';



export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <i className="material-icons">
                             </i> Adventist App
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/Asociaciones" className="nav-link">Asociaciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Mision" className="nav-link">Misiones</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Informacion" className="nav-link">Informacion</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link">Contacto</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        
        </>
    );
}
