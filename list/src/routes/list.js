const { Router } = require('express');

const listRoutes = Router();

listRoutes.get("/", (req, response) =>{
    response.send({message:"Hi, I'm list"}) 
})

module.exports =  listRoutes