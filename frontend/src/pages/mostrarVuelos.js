import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
//Importas css
export default function MostrarVuelos(){
    const [listavuelos, setListavuelos]=useState('')
    const getVuelos= async()=>{
        
        const url='http://localhost:9000/api/showflights/'
        const {data}= await axios.get(url)
        setListavuelos(data)
    }
    useEffect(()=>{
        getVuelos()
    })
    const vuelos= Object.values(listavuelos)
    
    return (
        <main>
            <h1>¿Qué vuelo elegiré hoy?</h1>
            <h3>Vuelos disponibles para su reserva</h3>
            <div className="mostrarVuelos">
                <table id="listaVuelos">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Aerolínea</th>
                            <th>Partida</th>
                            <th>Destino</th>
                            <th>Precio</th>
                            <th>Fecha del vuelo</th>
                            <th>Hora de salida</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vuelos.map((datos)=>(
                                <tr>
                                    <td>{datos.id}</td>
                                    <td>{datos.aerolinea}</td>
                                    <td>{datos.origen}</td>
                                    <td>{datos.destino}</td>
                                    <td>{datos.precio}</td>
                                    <td>{datos.fechavuelo}</td>
                                    <td>{datos.horasalida}</td>
                                    <td>
                                        <button id="Reservar">Reservar Vuelo</button>
                                    </td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}