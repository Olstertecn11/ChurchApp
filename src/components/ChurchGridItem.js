import React from 'react';
import { useState, useEffect } from 'react';





const ChurchGridItem = ({church}) => {
    
    const [position, setPosition] = useState([]);
    
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((pos) =>{
            //console.log('Latitud: ', pos.coords.latitude);
            //console.log('Latitud: ', pos.coords.longitude);
            var myPos = [pos.coords.latitude, pos.coords.longitude];
            setPosition(myPos);
        });
    }, []);
    
    return (
        <div key={church.Nombre+"2d"} style={{width: 800, height: 700, marginTop: 20}}  className="shadow-lg p-3 mb-5 bg-darks rounded border-bottom mx-auto card p-2">
            <div className="card-body" style={{padding: 20}}>
                <h3>{church.Nombre}</h3>
                <p>{church.Ubicacion}</p>
                <p>{church.Mision}</p>
                <iframe src={`https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d30880.08117208651!2d${position[1]}!3d${position[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d${position[0]}!2d${position[1]}!4m3!3m2!1d${church.PosX}!2d${church.PosY}!5e0!3m2!1ses!2sgt!4v1635305813144!5m2!1ses!2sgt`} width="600" height="450"   loading="lazy"></iframe>
            </div>

        </div>
    )
}

export default ChurchGridItem;
