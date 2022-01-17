import React from 'react';
import './style-components/Grid.css';
import { useFetchChurch } from "../hooks/useFetchChurch";
import ChurchGridItem from "./ChurchGridItem";


export default function Grid({mision}) {
    
    const {data: images, loading} = useFetchChurch(mision);



    return (
        <div className="contentGrid">
            {loading && <p>Loading...</p>}
            {
                images.length > 0?(
                    images.map(myAso => {
                        return (
                            <ChurchGridItem key={myAso.Id + myAso.Anciano[0]} church={myAso} />
                        )
                    })

                ):(
                    <h2 className="text-center text-white">En Desarrollo</h2>
                )
            }
        </div>
    )
}


