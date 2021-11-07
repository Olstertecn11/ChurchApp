import { useEffect, useState } from "react";
import { calcCrow } from "../helpers/Distance";
import { getDistance } from "../helpers/Distance";

export default function ChurchGrid() {


    const [element, setElement] = useState([]);
    const [pos, setPos] = useState([]);
    useEffect(() =>{
        getData();
        navigator.geolocation.getCurrentPosition((pos) =>{
            //console.log('Latitud: ', pos.coords.latitude);
            //console.log('Latitud: ', pos.coords.longitude);
            var myPos = [pos.coords.latitude, pos.coords.longitude];
            setPos(myPos);
        });
    }, []);


    const getData = async() =>{
        const data = await fetch("https://pure-gorge-01437.herokuapp.com/getChurch/");
        const churchs = await data.json();
        setElement(churchs);
    }


    return (
        <div>
            <h2>Iglesias</h2>
            <ul>
                {
                    element.map(item =>{
                        if(getDistance(element, item, pos))
                        {
                            return(
                                <div key={item.Id + item.Nombre[1]} className="card p-2 mt-4">
                                    <div className="card-body mx-auto">
                                        <h3 className="card-title">{item.Nombre}</h3>
                                        <p className="card-text">{item.Ubicacion}</p>
                                        <iframe src={`https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d30880.08117208651!2d${pos[1]}!3d${pos[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d${pos[0]}!2d${pos[1]}!4m3!3m2!1d${item.PosX}!2d${item.PosY}!5e0!3m2!1ses!2sgt!4v1635305813144!5m2!1ses!2sgt`} width="600" height="450"   loading="lazy"></iframe>
                                        <p>{calcCrow(pos[0], pos[1], item.PosX, item.PosY)} Km</p>
                                    </div>
                                </div>
                            )
                        }
                        // console.log(getDistance(element, item, pos));
                    })
                }
            </ul>
        </div>
    )
}

