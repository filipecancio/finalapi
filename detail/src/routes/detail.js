const { Router } = require('express');

const detailRoutes = Router();

detailRoutes.get("/", (req, response) =>{
    response.send({message:"Hi, I'm detail"}) 
})

module.exports =  detailRoutes