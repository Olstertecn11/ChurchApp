import React from 'react'

export default function Informacion() {
    return (
        <>
            <div className="container mt-5 text-white">
                <h1>Quienes Somos?</h1>
                <div className="row g-3">
                    <div className="col-md-7" >
                        <img src={"https://github.com/Olivers11/Images/blob/master/img/mision.png?raw=true"} width="450" height="220" />
                    </div>
                    <div className="col-md-5">
                        <p  ><font face="stencil"><b>La misión de la Iglesia Adventista del Séptimo Día es hacer discípulos de todas las naciones mediante la proclamación del evangelio eterno en el contexto de los mensajes de los tres ángeles de Apocalipsis 14: 6-12, guiándolos a aceptar a Jesús como Salvador personal y a unirse a su iglesia remanente, e instruyéndolos para que sirvan al Señor y se preparen para su pronto regreso.</b></font></p>
                    </div>
                    <div className="col-md-7">
                        <img src={"https://github.com/Olivers11/Images/blob/master/img/vision.png?raw=true"} width="450" height="220" />
                    </div>
                    <div className="col-md-5">
                        <p ><font size="3" face="stencil"><b>“Cada miembro del cuerpo de Cristo preparado para el reino de Dios”.</b></font></p>
                    </div>
                    <div className="col-md-7">
                        <img src={"https://github.com/Olivers11/Images/blob/master/img/valores.png?raw=true"} width="450" height="220" />
                    </div>
                    <div className="col-md-5">
                        <p ><font size="3" face="stencil"><b>Amor, Servicio, Obediencia, Excelencia, Coherencia, Integridad, Lealtad, Respeto, Tolerancia, Compromiso.</b></font></p>
                    </div>
                    
                    <div className="col-md-12">
                        <a  className="btn btn-primary" target="_blank" href="https://es-la.facebook.com/CentralGuatemalaIglesiaAdventista/" role="button"
                            ><i className="fab fa-facebook-f">Facebook</i
                        ></a>
                        <a  className="btn btn-primary ml-2"  target="_blank" href="https://twitter.com/adventista_es?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" role="button"
                            ><i className="fab fa-twitter">Twitter</i
                        ></a>
                        <a className="btn btn-primary ml-2"  target="_blank" href="https://www.instagram.com/iglesiaadventistaoficial/?hl=es" role="button"
                            ><i className="fab fa-instagram">Instagram</i
                        ></a>
                        <a className="btn btn-primary ml-2"  target="_blank" href="https://www.youtube.com/channel/UC5QTNtavIA-uuuCDuaZYIUA" role="button"
                            ><i className="fab fa-youtube">Youtube</i
                        ></a>
                    </div>  
                </div>
            
            </div>
        </>
    )
}
