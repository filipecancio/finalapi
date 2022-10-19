const { Router } = require('express');

const gameRoutes = Router();

gameRoutes.get("/", (req, response) =>{
    response.send({message:"Hi, I'm game"}) 
})

module.exports =  gameRoutes