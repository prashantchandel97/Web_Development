const express = require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const promoRouter = express.Router();
const Promotions = require('../models/promotions');
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.post((req,res,next)=>{
    Promotions.create(req.body)
    .then((promotion) => {
        console.log('Promotion Created');
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(promotion);
    },(err) => next(err))
    .catch((err)=>next (err));
})
.get((req,res,next)=>{
    Promotions.find({})
    .then((promotion) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(promotion);
    }, (err) => next(err))
    .catch((err)=>next (err));
})
.put((req,res,next)=>{
res.statusCode = 403;
res.end('put not supported on promotions ');
})
.delete((req,res,next)=>{
    Promotions.remove({})
    .then((resp) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err) => next(err))
    .catch((err)=>next (err));
});

promoRouter.route('/:promoId')
.post((req,res,next)=>{
    Promotions.findByIdAndUpdate(req.params.promoId,{
        $set : req.body
    }, { new: true })
    .then((promotion) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(promotion);
    }, (err) => next(err))
    .catch((err)=>next (err));
})
.get((req,res,next)=>{
    Promotions.findById(req.params.promoId)
    .then((promotion) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(promotion);
    }, (err) => next(err))
    .catch((err)=>next (err));
})
.put((req,res,next)=>{
    Promotions.findByIdAndUpdate(req.params.promoId,{
        $set : req.body
    }, { new: true })
    .then((promotion) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(promotion);
    }, (err) => next(err))
    .catch((err)=>next (err));
})
.delete((req,res,next)=>{
    Promotions.findByIdAndRemove(req.params.promoId)
    .then((resp) => {
        res.StatusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err) => next(err))
    .catch((err)=>next (err));
});

module.exports = promoRouter;