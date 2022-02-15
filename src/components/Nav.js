import React, {useState} from "react";
import './style-components/Nav.css';
import { useHistory } from "react-router-dom";


export default function Nav() {
   
    const [active, setActive] = useState('')
    let history = useHistory();

    const handleClick = (event)=>{
	var id = event.target.id;
	if(id === "1"){
	    history.push("/Asociaciones");
	}
	else if(id === "2"){
	    history.push("/Mision");
	}
	else if(id === "3"){
	    history.push("/Informacion");
	}
	else if(id === "4"){
	    history.push("/Contact");
	}
	else{
	    history.push("/");
	}
	setActive(id);	
    }




    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <div className="container">
                    <button className="navbar-brand" id="0" style={{color: "#1C9741", fontSize:22}} 
			onClick={handleClick}>
                        <i className="material-icons" >
                             </i> AdventistApp
                    </button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
			    <li className='nav-item'>
                                <button className={active === "1" ? 'nav-link active' : 'nav-link'} id="1"
				    onClick={handleClick} >
				    Asociaciones 
				</button>
                            </li>
                            <li className='nav-item'>
                                <button  className={active === "2" ? 'nav-link active' : 'nav-link'}
				    onClick={handleClick} id="2" > 
				    Misiones 
				</button>
                            </li>
			    <li className='nav-item'>
                                <button  className={active === "3" ? 'nav-link active' : 'nav-link'}
				    onClick={handleClick} id="3"> 
				    Informacion
				</button>
                            </li>
                            <li className="nav-item">
                                <button className={active === "4" ? 'nav-link active' : 'nav-link'} 
				    onClick={handleClick} id="4"> 
				    Contacto
				</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        
        </>
    );
}
