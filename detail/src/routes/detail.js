const { Router } = require('express');
const getPokemonDetail = require('../server/pokeserver');

const detailRoutes = Router();

detailRoutes.get("/test", (req, response) =>{
    response.send({message:"Backend Pegou"})
})

detailRoutes.get("/:id", (req, response) =>{
    const id = req.params.id
    getPokemonDetail(id, async (body) =>{
        response.send(body)
    })
})

module.exports =  detailRoutes