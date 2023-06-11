const express=require("express")
const routes= express.Router()
//Para los usuarios
routes.get("/email/:email", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM users WHERE email=?',[req.params.email], (err, results)=>{
            if(err) return res.send(err)
            if(results.length>0){
                res.json({encontrado:true})
            }
            else{
                res.json({encontrado:false})
            }
        })
    })
})

routes.get("/password/:password", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM users WHERE contrasena=?',[req.params.password], (err, results)=>{
            if(err) return res.send(err)
            if(results.length>0){
                res.json({encontrado:true})
            }
            else{
                res.json({encontrado:false})
            }
        })
    })
})

routes.post("/registeruser", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO users set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send("Datos guardados")
        })
    })
})
//Para los vuelos
routes.post("/registerflights", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO vuelos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send("Datos guardados")
        })
    })
})

routes.get("/showflights", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM vuelos', [req.body], (err, results)=>{
            if(err) return res.send(err)
            res.send(results)
        })
    })
})

//Se usara mas adelante, borrar de ser necesario
routes.delete("/deleteflight/:id", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM vuelos WHERE id=?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send("Vuelo eliminado")
        })
    })
})

routes.put("/:nombre", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE users set ? WHERE nombre=?', [req.body, req.params.nombre], (err, rows)=>{
            if(err) return res.send(err)
            res.send("Usuario actualizado")
        })
    })
})

module.exports=routes
