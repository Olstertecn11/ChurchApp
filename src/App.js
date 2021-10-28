import React from 'react'
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import Asociacion from './components/Asociacion';
import Informacion from './components/Informacion';
import Contact  from './components/Contact';
import Church from './components/Church';

export default function App() {
    return (
        <div>
                <Nav />
                <Route path="/" exact  component={Main} />
                <div className="container p-4">
                        
                        <Route path="/Asociaciones"  component={Asociacion} />
                        <Route path="/Mision"  component={Asociacion} />
                        <Route path="/Contact"  component={Contact} />
                        <Route path="/Informacion"  component={Informacion} />
                        <Route path="/Church"  component={Church} />
                </div>
            
        </div>
    )
}
