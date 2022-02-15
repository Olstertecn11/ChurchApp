import React from 'react'
import './../App.css';
import { Link } from 'react-router-dom';
import Blog from './Blog';

export default function Main() {
    return (
        <div>
	    <div className="img-container">
		    <h2 className="text-center text-white title">Iglesia  <b style={{color:"green"}}>Adventista</b> del Septimo Dia</h2>
		    <button className="icon"><i className="fas fa-place-of-worship"></i></button>
		    <Link to="/Church" className="btn btn-light">
			Iglesias Cerca
		    </Link>
	    </div>
	    <Blog />
        </div>
    )
}
