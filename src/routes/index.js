import express from "express";
import usuario from "./usuarioRoutes.js"
import empresa from "./empresaRoutes.js";
//import produto from "./produtoRoutes.js"




const routes = (app) => {
    app.route('/').get((req,res) =>{
        res.status(200).send({titulo: "Preço Mínimo"})
    })

    app.use(
        express.json(),
        usuario,
        empresa
        
    )
}

export default routes