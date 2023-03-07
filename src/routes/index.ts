import express from "express";
import animes from "./animeRoutes.js";

const routes = (app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo : "API Anime !"});
    })

    app.use(
        express.json(),
        animes
    )
}


export default routes;