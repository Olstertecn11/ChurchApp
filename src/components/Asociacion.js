import React from "react";
import { useEffect, useState } from "react";
import "./style-components/Asociacion.css";
import Grid  from "./Grid";
import Fade from 'react-reveal/Fade';


export default function Asociacion({title, datas}) {

    const [mision, setMision] = useState();



    const handleChange = (event)=>{
        var value = event.target.value;
        value = value.substring(3, value.length);
        setMision(value);
    }

    useEffect(()=>{
        var selected_value = document.getElementById("exampleFormControlSelect1").value;
        setMision(selected_value);
    }, [])

    return (
        <>
            <Fade top>
                <div className="container">
                    <div className="row">
                        <h3 className="text-center text-white">{title}</h3>

                        <div className="form-group mx-auto mt-4">
                            <select
                                className="form-control mx-auto"
                                id="exampleFormControlSelect1"
                                onChange={handleChange}
                            > 
                            {
                                
                                datas.map(item =>{
                                    if(title === "Asociaciones")
                                    {
                                        return(<option  key={item} value={item}> {title.substring(0, title.length-2) + " " + item} </option>);
                                    }
                                    else{
                                        return(<option  key={item} value={item}> {title.substring(0, title.length-2) + " del " + item} </option>);
                                    }
                                })
                            }
                            </select>
                            <Grid mision={mision} />
                        </div>
                    </div>
                </div>
            </Fade>  
        </>
    );
}
