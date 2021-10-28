import React from 'react'
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import Asociacion from './components/Asociacion';
import Informacion from './components/Informacion';
import Contact  from './components/Contact';
import Church from './components/Church';

export default function App() {
    return (
        <div>
            <Router >
                <Nav />
                <Route path={process.env.PUBLIC_URL+"/Principal"} exact  component={Main} />
                <div className="container p-4">
                        
                        <Route path={process.env.PUBLIC_URL+"/Asociaciones"}  component={Asociacion} />
                        <Route path={process.env.PUBLIC_URL+"/Mision"}  component={Asociacion} />
                        <Route path={process.env.PUBLIC_URL+"/Contact"}  component={Contact} />
                        <Route path={process.env.PUBLIC_URL+"/Informacion"}  component={Informacion} />
                        <Route path={process.env.PUBLIC_URL6+"/Church"}  component={Church} />
                </div>
            </Router>
            
        </div>
    )
}
