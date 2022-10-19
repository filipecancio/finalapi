const { Router } = require('express');
const getPokemonDetail = require('../server/pokeserver');

const detailRoutes = Router();

detailRoutes.get("/:id", (req, response) =>{
    const id = req.params.id
    getPokemonDetail(id, async (body) =>{
        response.send(body)
    })
})

module.exports =  detailRoutes