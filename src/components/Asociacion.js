import React from "react";
import "./style-components/Asociacion.css";

export default function Asociacion() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className="text-center">Asociaciones</h3>

                    <div className="form-group mx-auto mt-4">
                        <select
                            className="form-control mx-auto"
                            id="exampleFormControlSelect1"
                        >
                            <option>Asociacion Central</option>
                            <option>Asociacion Metropolitana</option>
                            <option>Asociacion Occidental</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}
