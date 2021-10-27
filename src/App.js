import React from 'react'
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import Asociacion from './components/Asociacion';
import Informacion from './components/Informacion';
import Contact  from './components/Contact';


export default function App() {
    return (
        <div>
            <Router >
                <Nav />
                <Route path="/" exact  component={Main} />
                <div className="container p-4">
                        
                        <Route path="/Asociaciones"  component={Asociacion} />
                        <Route path="/Mision"  component={Asociacion} />
                        <Route path="/Contact"  component={Contact} />
                        <Route path="/Informacion"  component={Informacion} />
                </div>
            </Router>
            
        </div>
    )
}
