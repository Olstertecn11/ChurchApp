import React from 'react'

export default function Informacion() {
    return (
        <>
            <div className="container mt-4">
                <div className="row mt-4">
                    <div className="col">
                        <p style={{color:"white", fontWeight:"bold", fontSize:45, marginTop:20}}>QUIENES SOMOS LOS <br /> <b style={{color:"green"}}>ADVENTISTAS.</b> </p>
                        <br />
                        <p style={{textAlign:"justify", color:"white", fontFamily:"Verdana", fontSize:19}}>Las personas adventistas, pues, siguen la Biblia como revelación literal de Dios. La esperanza en la inminencia de la parusía (retorno triunfante de Jesús) y la inmortalidad selectiva (de aquellos a quienes Jesús escoge por sus méritos) son algunas de las creencias más importantes de los <b style={{color:"green"}}>adventistas.</b> </p>
                    </div>
                    <div className="col">
                        <img style={{marginLeft:50}} src="https://github.com/Olivers11/Images/blob/master/ChurchApp/mundo.png?raw=true" width="500" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
