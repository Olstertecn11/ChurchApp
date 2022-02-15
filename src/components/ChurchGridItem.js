import React from 'react';
import { useState, useEffect } from 'react';
import './style-components/GridItem.css';



const ChurchGridItem = ({church}) => {
    
    const [position, setPosition] = useState([]);
    
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((pos) =>{
            var myPos = [pos.coords.latitude, pos.coords.longitude];
            setPosition(myPos);
        });
    }, []);
    
    return (
        <>
            <div style={{width: 500, height: 480, marginTop: 20}}  className="shadow-lg mb-5 bg-darks rounded border-bottom mx-auto card">
                <div className="card-body" style={{padding: 20}}>
                    <h3>Iglesia {church.Nombre}</h3>
                    <p> <b>Ubicacion</b> {church.Ubicacion}</p>
                    <iframe  src={`https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d30880.08117208651!2d${position[1]}!3d${position[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d${position[0]}!2d${position[1]}!4m3!3m2!1d${church.PosX}!2d${church.PosY}!5e0!3m2!1ses!2sgt!4v1635305813144!5m2!1ses!2sgt`} width="450" height="280"   loading="lazy"></iframe>
                    <button to={{pathname:'/Some', state:{church:church, position:position}}} className="btn btn-success btn-block mt-4">Ver Iglesia</button>
                </div>
            </div>
        </>
    )
}

export default ChurchGridItem;
