import React from "react";
import { Link } from "react-router-dom";
import './style-components/Nav.css';




export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" href="#">Adventist App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Misiones
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" href="#">Action</Link>
                        <Link className="dropdown-item" href="#">Another action</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Something else here</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Asociaciones
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" href="#">Action</Link>
                        <Link className="dropdown-item" href="#">Another action</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Something else here</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Informacion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contacto</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        
        </>
    );
}
