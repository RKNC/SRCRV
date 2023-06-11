import React, {Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
//Importas css

class MainPage extends Component{ //Reemplaza por export default function nombre()
    render(){
        return(
            <body>
                <main>
                    <div class="contenedor_todo">
                        <h1>Bienvenido a FlyEasy</h1>
                        <div class="contenedor_register">
                            <h3>¿Aun no tienes cuenta?</h3>
                            <div>
                                <Link to="/register">Regístrate</Link>
                            </div>
                        </div>
                        <div class="contenedor_login">
                            <h3>¿Ya tienes cuenta?</h3>
                            <div>
                                <Link to="/login">Inicia sesión</Link>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        )
    }
}

export default MainPage //Reemplaza por export default function nombre()