import React, {useState} from "react"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
//Importas css
export default function MostrarVuelos(){
    const mostrarVuelos= async (e)=>{
        const url='http://localhost:9000/api/showflights/'+email+'#'
        const response = await axios.get(url);
    }




    
    return (
        <main>
            <h1>¿Qué vuelo elegiré hoy?</h1>
            <h3>Vuelos disponibles para su reserva</h3>
            <div class="tabla">
                <table id="listaVuelos" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Aerolínea</th>
                            <th>Partida-Destino</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                </table>
            </div> 
        </main>
    )
}