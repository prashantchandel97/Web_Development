const express = require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const leaderRouter = express.Router();
const Leaders = require('../models/leaders');
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.post((req,res,next)=>{
    Leaders.create(req.body)
    .then((leader) => {
        console.log('Promotion Created');
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(leader);
    },(err) => next(err))
    .catch((err)=>next (err));
})
.get((req,res,next)=>{
    Leaders.find({})
    .then((leader) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(leader);
    }, (err) => next(err))
    .catch((err)=>next (err));
})
.put((req,res,next)=>{
res.statusCode = 403;
res.end('put not supported on leaders');
})
.delete((req,res,next)=>{
    Leaders.remove({})
    .then((resp) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err) => next(err))
    .catch((err)=>next (err));
});

leaderRouter.route('/:leaderId')
.post((req,res,next)=>{
    Leaders.findByIdAndUpdate(req.params.leaderId,{
        $set : req.body
    }, { new: true })
    .then((leader) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(leader);
    }, (err) => next(err))
    .catch((err)=>next (err));
})
.get((req,res,next)=>{
    Leaders.findById(req.params.leaderId)
    .then((leader) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(leader);
    }, (err) => next(err))
    .catch((err)=>next (err));
})
.put((req,res,next)=>{
    Leaders.findByIdAndUpdate(req.params.leaderId,{
        $set : req.body
    }, { new: true })
    .then((leader) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(leader);
    }, (err) => next(err))
    .catch((err)=>next (err));
})
.delete((req,res,next)=>{
    Leaders.findByIdAndRemove(req.params.leaderId)
    .then((resp) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err) => next(err))
    .catch((err)=>next (err));
});

module.exports = leaderRouter;