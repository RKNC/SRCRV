import React, {useState} from "react"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
//Importas css

export default function EliminarVuelo(){




    return(
        <body>
            <h1>Vuelos Registrados</h1>

            <table>
                <tr>
                <th>Nombre de la Aerolínea</th>
                <th>Categorías Disponibles</th>
                <th>Precio</th>
                <th>Cantidad de Asientos Disponibles</th>
                <th>Fecha y Hora de Llegada/Ida</th>
                <th>Acciones</th>
                </tr>
                <tr>
                <td class="nombre-aerolinea">Aerolínea 1</td>
                <td class="categorias-disponibles">Categoría 1, Categoría 2</td>
                <td class="precio">$100</td>
                <td class="asientos-disponibles">150</td>
                <td class="fecha-hora">2023-05-28 10:00 AM</td>
                <td>
                    <button class="boton-eliminar">Eliminar</button>
                </td>
                </tr>
                <tr>
                <td class="nombre-aerolinea">Aerolínea 2</td>
                <td class="categorias-disponibles">Categoría 3</td>
                <td class="precio">$200</td>
                <td class="asientos-disponibles">100</td>
                <td class="fecha-hora">2023-05-29 3:30 PM</td>
                <td>
                    <button class="boton-eliminar">Eliminar</button>
                </td>
                </tr>
            </table>
            </body>
    )
}