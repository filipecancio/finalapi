const { Router } = require('express');
const getRandomPokemon = require('../server/pokeserver');

const gameRoutes = Router();

gameRoutes.get("/", (req, response) =>{
    const rpokemon = getRandomPokemon( async (body) =>{
        
        response.send({
            pokemons:body
        })
    }) 
    console.log(rpokemon)
})

module.exports =  gameRoutes