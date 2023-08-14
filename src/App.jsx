import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Roccte, BrowserRouter, Routes} from 'react-router-dom';
// import Nav from './components/Nav';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
// import Informacion from './components/Informacion';
// import Contact from './components/Contact';
// import Church from './components/Church';
// import UniqueChurch from './components/UniqueChurch';


export default function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Main />} />
			</Routes>
		</div>

	)
}
