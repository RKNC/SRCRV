import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./Estilos/menuuser.css"

class MenuUser extends Component{
    render(){
        return(
            <body>
                <main>
                    <html>
                        <div className="contenedor_todo">
                            <h1>Bienvenido a FlyEasy, web para la reserva de vuelos</h1>
                            <h2>¿En qué podemos ayudarte hoy?</h2>
                            <div className="vuelos">
                                    <h3>Haz click aquí para observar todos los vuelos disponibles para ti</h3>
                                    <Link to="/mostrarvuelos"> Mostrar Vuelos</Link>
                            </div>
                            <div className="reservas">
                                    <h3> Si quieres observar, confirmar o modificar tus reservas, haz click aquí</h3>
                                <Link to="/reservas">Ver historial de reservas</Link>
                            </div>
                        </div>
                    </html>
                </main>
            </body>
        )
    }
}

export default MenuUser