const { response } = require('express')
const request = require('request')

const BASE_URL = 'https://pokeapi.co/api/v2/'

const getRandomPokemon = (fun) => {
    request(`${BASE_URL}pokemon-species/?offset=${Math.floor(Math.random() * 1130)}&limit=3`,(err,res,body)=> {
        fun(body.data)
        return body
    })
}

module.exports = getRandomPokemon