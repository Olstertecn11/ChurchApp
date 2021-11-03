import { useEffect, useState } from "react";


export default function ChurchGrid() {

    const [element, setElement] = useState([]);


    useEffect(() =>{
        getData();
    }, []);


    const getData = async() =>{
        const data = await fetch("https://pure-gorge-01437.herokuapp.com/getChurch/");
        const churchs = await data.json();
        console.log(churchs);
        setElement(churchs);
    }


    return (
        <div>
            <h2>Iglesias</h2>
            <ul>
                {
                    element.map(item =>(
                        <li key={item.Id}>{item.Nombre} - {item.Ubicacion}</li>
                    ))
                }
            </ul>
        </div>
    )
}

