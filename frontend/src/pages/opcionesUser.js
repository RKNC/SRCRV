import React, {useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import UserHeader from "../components/userHeader"

export default function OpcionesUser(){

    const navigate= useNavigate()
    useEffect(()=>{
        const userEmail= localStorage.getItem("data")
        if(userEmail==null){
            localStorage.clear()
            navigate('/mainpage')
        }
    })
    const userData= async()=>{
        try{
            const userEmail= localStorage.getItem("data")
            const url1= 'http://localhost:9000/api/password/'+userEmail+'#'
            const response1 = await axios.get(url1)
            const infoUser= Object.values(response1.data)
            localStorage.setItem("nombre", infoUser[0].nombre)
            localStorage.setItem("apellido", infoUser[0].apellido)
            localStorage.setItem("numero", infoUser[0].numero)
        }catch(error){
            console.log("Respuesta del servidor: "+error)
        }
    }
    useEffect(()=>{
        userData().catch((error)=>{
            console.log(error)
        })  
    })
    const actualizarDatos= async (e)=>{

    }
    const eliminarUsuario= async (e)=>{
        const email= localStorage.getItem("data")
        const url= "http://localhost:9000/api/delete/"+email+"#"
        const response= await axios.delete(url)
        console.log(response)
        localStorage.clear()
        alert("Cuenta eliminada con éxito")
        navigate("/mainpage")
    }

    const user={
        nombre: localStorage.getItem("nombre"),
        apellido: localStorage.getItem("apellido"),
        email: localStorage.getItem("data"),
        numero: localStorage.getItem("numero")
    } 
    return(
        <body>
            <main>
                <html>
                    <UserHeader/>
                    <h2>Datos actuales de la cuenta</h2>
                    <div className="contenedor_Datos">
                        <h2>Información de la cuenta:</h2>
                        <h3>Nombre del usuario: {user.nombre}</h3>
                        <h3>Apellido del usuario: {user.apellido}</h3>
                        <h3>Email del usuario: {user.email}</h3>
                        <h3>Numero telefonico del usuario: {user.numero}</h3>
                    </div>
                    <button onClick={actualizarDatos}>Actualizar datos</button>
                    <button onClick={eliminarUsuario}>Eliminar cuenta</button>
                    <h3>Recuerde que eliminar la cuenta es irreversible y se cancelarán todas las reservas a su nombre</h3>
                </html>
            </main>
        </body>
    )
}