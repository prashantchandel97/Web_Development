const express = require('express');
const bodyParser =require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.post((req,res,next)=>{
    res.end('Will add the dishes: '+ req.body.name + ' with details : '+ req.body.description);
})
.get((req,res,next)=>{
res.end('Will send all the dishes to you');
})
.put((req,res,next)=>{
res.statusCode = 403;
res.end('put not supported on dishes ');
})
.delete((req,res,next)=>{
res.end('Deleting all the dishes ');
});

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('post not supported on dishes ');
})
.get((req,res,next)=>{
    res.end('Will send details of the dish '+req.params.dishId+'  to you');
})
.put((req,res,next)=>{
    res.end('Will update the dish: '+ req.body.name + ' with details : '+ req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the dish '+req.params.dishId);
});


module.exports = dishRouter;