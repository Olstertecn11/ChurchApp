import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style-components/Nav.css';
import DropCard from "./DropCard";




export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Misiones
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" >Mision del Norte</a>
                                    <a className="dropdown-item" >Mision del Sur</a>
                                    <a className="dropdown-item" >Mision del Altiplano</a>
                                    <a className="dropdown-item" >Mision de Oriente</a>
                                    <a className="dropdown-item" >Mision del Lago</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Asociaciones
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" >Asociacion Central</a>
                                    <a className="dropdown-item" >Asociacion Metropolitana</a>
                                    <a className="dropdown-item" >Asociacion Occidental</a>
                                </div>
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
