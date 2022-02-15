import React from 'react'
import { useLocation } from 'react-router-dom';
import {  useEffect } from 'react';

function UniqueChurch() {
    const location = useLocation();
    const church = location.state?.church;
    const position = location.state?.position;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <div className="container mx-auto">
                <div className="row">
                    <div className="col">
                        <div style={{width: 500, height: 480, marginTop: 20}}  className="shadow-lg mb-5 bg-darks rounded border-bottom mx-auto card">
                            <div className="card-body" style={{padding: 20}}>
                                <h3 className="text-center mt-2">Iglesia {church.Nombre}</h3>
                                <div className="row mt-2">
                                    <div className="col mt-4">
                                        <iframe  src={`https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d30880.08117208651!2d${position[1]}!3d${position[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d${position[0]}!2d${position[1]}!4m3!3m2!1d${church.PosX}!2d${church.PosY}!5e0!3m2!1ses!2sgt!4v1635305813144!5m2!1ses!2sgt`} width="450" height="280"   loading="lazy"></iframe>
                                    </div>
                                    <p className="mt-4 text-muted text-center">Pr. {church.Pastor}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <table class="table bg-success text-white mt-4 text-center">
                            <thead>
                                <tr>
                                <th class="lopendeopdrachten" colspan="4">Horarios y Actividades</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Hora</th>
                                    <td> <b>Domingo</b> </td>
                                    <td> <b>Miercoles</b> </td>
                                    <td> <b>Sabado</b> </td>
                                </tr>
                                <tr>
                                    <th scope="row">19:00 - 20:00</th>
                                    <td>Culto Virtual</td>
                                    <td>Culto Virtual</td>
                                    <td>----</td>
                                </tr>
                                <tr>
                                    <th scope="row">09:30 - 12:00</th>
                                    <td>Club de Conquistadores</td>
                                    <td>----</td>
                                    <td>Culto </td>
                                </tr>
                                <tr>
                                    <th scope="row">16:00 - 18:00</th>
                                    <td>----</td>
                                    <td>----</td>
                                    <td>S. Jovenes</td>
                                </tr>
                                <tr>
                                    <th scope="row">19:00 - 20:30</th>
                                    <td>----</td>
                                    <td>----</td>
                                    <td>Futbol</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="card" style={{height: 210}}>
                            <p className="ml-4 mt-4"> <b>Anciano de Iglesia: </b> {church.Anciano} </p>
                            <p className="ml-4"> <b>Lider de Iglesia: </b> {church.Lider} </p>
                            <p className="ml-4"> <b>Distrito: </b> {church.Distrito} </p>
                            <p className="ml-4"> <b>Ubicacion: </b> {church.Ubicacion} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UniqueChurch;
