import React from 'react'
import './style-components/Contact.css';


export default function Contact() {
    return (
        <>
	    <div className="container content">
		<div className="row justify-content-center">
		    <div className="col-lg-10 col-md-12">
			<div className="wrapper">
			    <div className="row no-gutters">
				<div className="col-md-7 d-flex align-items-stretch">
				    <div className="contact-wrap w-100 p-md-5 p-4">
					<h3 className="mb-4 text-success">Ponerse en Contacto</h3>
					<div id="form-message-warning" className="mb-4"></div>
					<div id="form-message-success" className="mb-4 text-dark">
					    Your message was sent, thank you!
					</div>
					<form method="POST" id="contactForm" name="contactForm">
					    <div className="row">
						<div className="col-md-6">
						    <div className="form-group">
							<input type="text" 
							    className="form-control" 
							    name="name" 
							    id="name"
							    placeholder="Nombre"/>
						    </div>
						</div>
						<div className="col-md-6">
						    <div className="form-group">
							<input type="email" 
							    className="form-control" 
							    name="email" 
							    id="email"
							    placeholder="Email" />
						    </div>
						</div>
						<div className="col-md-12">
						    <div className="form-group">
							<input type="text" 
							    className="form-control" 
							    name="subject" 
							    id="subject"
							    placeholder="Asunto" />
						    </div>
						</div>
						<div className="col-md-12">
						    <div className="form-group">
							<textarea name="message" 
							    className="form-control" 
							    id="message" 
							    cols="30"
							    rows="7" 
							    placeholder="Mensaje">
							</textarea>
						    </div>
						</div>
						<div className="col-md-12">
						    <div className="form-group">
							<a className="btn text-white">
							    <span>
								<i className="fas fa-paper-plane fa-fw"></i>
							    </span>
							    Enviar Mensaje
							</a>
						    </div>
						</div>
					    </div>
					</form>
				    </div>
				</div>
				<div className="col-md-5 d-flex align-items-stretch text-center">
				    <div className="info-wrap w-100 p-lg-5 p-4">
					    <img src="https://github.com/Olivers11/Images/blob/master/ChurchApp/igle.png?raw=true" 
					    alt="Girl in a jacket" 
					    width="200" 
					    height="200"/>

				    </div>
				</div>
			    </div>
			</div>
		    </div>
		</div>
	    </div>

        </>
    )
}
