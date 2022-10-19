const { response } = require('express')
const request = require('request')

const BASE_URL = 'https://pokeapi.co/api/v2/'

const getPokemonDetail = (fun) => {
    request(`${BASE_URL}pokemon-species/`,(err,res,body)=> {
        fun(body)
        return body
    })
}

module.exports = getPokemonEspecies