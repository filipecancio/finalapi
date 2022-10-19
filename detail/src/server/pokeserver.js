const { response } = require('express')
const request = require('request')

const BASE_URL = 'https://pokeapi.co/api/v2/'

const getPokemonDetail = (id,fun) => {
    request(`${BASE_URL}pokemon-species/${id}`,(err,res,body)=> {
        fun(body)
        return body
    })
}

module.exports = getPokemonDetail