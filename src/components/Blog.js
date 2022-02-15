import React from 'react';
import './style-components/blog.css';



function Blog() {
    return (
	    <div className="blog">
		<div className="container">
		    <div className="row">
			<div className="col text-center">
			    <p className="initial-title">Iglesia Adventista</p>
			    <img className="img_col" 
			    src="https://github.com/Olivers11/Images/blob/master/ChurchApp/logo_azul.png?raw=true" 
			    width="150" alt="" />

			    <aside className="text_col">La Iglesia Adventista del Séptimo Día 
			    es una denominación cristiana, ​​ que a diferencias de otras 
			    denominaciones se caracteriza por guardar el sábado​ como día de reposo,
			    así como por estudiar la Biblia y complementarla con los 
			    escritos de Ellen G. White.</aside>
			    <p className="text-muted text-center" 
			    id="little-text">Movimiento adventista luchando para alcanzar almas</p> 
			    <button to="/Informacion" className="btn btn-warning text-left" >Conocer Más</button>
			</div>

			<div className="col">
			    <img 
			    className="s_img" 
			    src="https://cdn.pixabay.com/photo/2017/03/02/05/14/bible-2110439__340.jpg" 
			    width="500" alt="" />
			</div>
		    </div>
		</div>
	    </div>
    )
}

export default Blog;
