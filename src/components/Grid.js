import { useEffect, useState } from "react";
import React from 'react';
import './style-components/Grid.css';
import { useFetchChurch } from "../hooks/useFetchChurch";

export default function Grid({mision}) {
    
    const {data: images, loading} = useFetchChurch(mision);



    return (
        <div className="contentGrid">
            {
                images.length > 0?(
                    images.map(myAso => {
                        return (
                            <p className="text-white">{myAso.Nombre}</p>
                        )
                    })

                ):(
                    <h2 className="text-center text-white">En Desarrollo</h2>
                )
                /*
                mision=="Metropolitana"?(
                    images.map(myAso => {
                        return (
                            <p className="text-white">{myAso.Nombre}</p>
                        )
                    })
                ):(
                )*/
            }
        </div>
    )
}


