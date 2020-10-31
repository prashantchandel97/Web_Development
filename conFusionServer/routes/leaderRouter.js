const express = require('express');
const bodyParser =require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.post((req,res,next)=>{
    res.end('Will add the leaders: '+ req.body.name + ' with details : '+ req.body.description);
})
.get((req,res,next)=>{
res.end('Will send all the leaders to you');
})
.put((req,res,next)=>{
res.statusCode = 403;
res.end('put not supported on leaders ');
})
.delete((req,res,next)=>{
res.end('Deleting all the leaders ');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('post not supported on leader ');
})
.get((req,res,next)=>{
    res.end('Will send details of the leader '+req.params.leaderId+'  to you');
})
.put((req,res,next)=>{
    res.end('Will update the leadert: '+ req.body.name + ' with details : '+ req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the leader '+req.params.leaderId);
});

module.exports = leaderRouter;