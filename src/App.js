import React from 'react'
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

export default function App() {
    return (
        <div>
            <Router >
                <Nav />
                <div className="img-container">
                    <h2 className="text-center text-white title">Iglesia Adventista del Septimo Dia</h2>
                    <button className="icon"><i className="fas fa-place-of-worship"></i></button>
                    <a className="btn btn-light">
                        Iglesias Cerca
                    </a>

                </div>
            </Router>
            
        </div>
    )
}
