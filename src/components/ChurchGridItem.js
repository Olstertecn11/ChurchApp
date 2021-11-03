import React from 'react'

const ChurchGridItem = ({Nombre, Ubicacion, Mision}) => {
    return (
        <div>
            <h3>{Nombre}</h3>
            <p>{Ubicacion}</p>
            <p>{Mision}</p>
        </div>
    )
}

export default ChurchGridItem
