const express = require('express');
const bodyParser =require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.post((req,res,next)=>{
    res.end('Will add the promotions: '+ req.body.name + ' with details : '+ req.body.description);
})
.get((req,res,next)=>{
res.end('Will send all the promotions to you');
})
.put((req,res,next)=>{
res.statusCode = 403;
res.end('put not supported on promotions ');
})
.delete((req,res,next)=>{
res.end('Deleting all the promotions ');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('post not supported on promotions ');
})
.get((req,res,next)=>{
    res.end('Will send details of the promotion '+req.params.promoId+'  to you');
})
.put((req,res,next)=>{
    res.end('Will update the promotion: '+ req.body.name + ' with details : '+ req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the promotion '+req.params.promoId);
});

module.exports = promoRouter;