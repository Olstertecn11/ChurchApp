import React from 'react'
import './style-components/Contact.css';


export default function Contact() {
    return (
        <>
		<div className="container mt-5 text-white">
		    <h1 className="text-white">Contactenos!</h1>
		    <div className="row g-3">
			<div className="col-md-6">
			    <label  for="nombre"className="form-label">Nombre</label>
			    <input type="text" className="form-control" name="nombre" id="nombre" required />
			</div>
			<div className="col-md-6">
			    <label  for="apellido"className="form-label">Apellido</label>
			    <input type="text" className="form-control" name="apellido" id="apellido" required />
			</div>
			<div class="col-md-8">
			    <label  for="email"className="form-label">E-mail</label>
			    <input type="text" className="form-control" id="email"  name="email" required />
			</div>
			<div className="col-md-4">
			    <label  for="numeroTelefono"className="form-label">Numero de Telefono</label>
			    <input type="text" className="form-control" name="numeroTelefono" id="numeroTelefono" placeholder="(502) 47331499" />
			</div>
			<div className="col-md-12">
			    <label  for="preguntas"className="form-label">Comentarios o Preguntas?</label>
			    <textarea className="form-control" name="preguntas" id="preguntas" rows="3"></textarea>
			</div>
			<div className="col-md-12">
			    <button  type="Enviar" className="btn btn-primary">Enviar</button>
			</div> 
			<div className="col-md-12">
			    <a  className="btn btn-primary "  href={"https://es-la.facebook.com/CentralGuatemalaIglesiaAdventista/"} role="button"
				><i className="fab fa-facebook-f">Facebook</i
			    ></a>
			    <a  className="btn btn-primary ml-3" href={"https://twitter.com/adventista_es?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"} role="button"
				><i className="fab fa-twitter">Twitter</i
			    ></a>
			    <a className="btn btn-primary ml-3"  href={"https://www.instagram.com/iglesiaadventistaoficial/?hl=es"} role="button"
				><i className="fab fa-instagram">Instagram</i
			    ></a>
			    <a className="btn btn-primary ml-3"  href={"https://www.youtube.com/channel/UC5QTNtavIA-uuuCDuaZYIUA"} role="button"
				><i className="fab fa-youtube">Youtube</i
			    ></a>
			</div>  
		    </div>
		    
		</div>

        </>
    )
}
