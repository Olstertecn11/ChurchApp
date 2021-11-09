import React from "react";
import { useEffect, useState } from "react";
import "./style-components/Asociacion.css";

export default function Asociacion({title, datas}) {


    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(datas);
        console.log(data);
    }, []);


    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className="text-center">{title}</h3>

                    <div className="form-group mx-auto mt-4">
                        <select
                            className="form-control mx-auto"
                            id="exampleFormControlSelect1"
                        > 
                        {
                            datas.map(item =>{
                                return(<option  key={item} value={item}> {title.substring(0, title.length-2) + " " + item} </option>);
                            })
                        }
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}
