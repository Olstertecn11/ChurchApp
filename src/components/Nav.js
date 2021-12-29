import React from "react";
import { Link } from "react-router-dom";
import './style-components/Nav.css';



export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <div className="container">
                    <Link className="navbar-brand" style={{color: "#1C9741", fontSize:22}} to="/">
                        <i className="material-icons" >
                             </i> AdventistApp
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/Asociaciones" className="nav-link"> <span>Asociaciones</span> </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Mision" className="nav-link"> <span>Misiones</span> </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Informacion" className="nav-link"> <span>Informacion</span> </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link"> <span>Contacto</span> </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        
        </>
    );
}
