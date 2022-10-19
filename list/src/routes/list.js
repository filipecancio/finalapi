const { Router } = require('express');
const getPokemonEspecies = require('../server/pokeserver');

const listRoutes = Router();

listRoutes.get("/", (req, response) =>{
    getPokemonEspecies("", async (body) =>{
        response.send(body)
    }) 
})

module.exports =  listRoutes