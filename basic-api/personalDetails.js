const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();

const personalDetail = require('../schema');
route.get("/",(req,res)=>{
    personalDetail.find().then(result =>{
        res.status(200).json(result)
    })
    // res.send("Get Working")
})
route.post('/',(req,res)=>{
    const person = new personalDetail({
        name: req.body.name,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailID: req.body.emailID,
        phoneNo: req.body.phoneNo,
        address: req.body.address,
    })
    person.save().then(result=>{
        res.status(201).json(result);
    }).catch(err=>{
        console.log(err);
    })
})


route.delete("/",(req,res) =>{
    const id = req.query.id;
    personalDetail.deleteOne({_id : id}).then(result =>{
        res.status(204).json(result)
    });
})

route.patch("/:id",(req,res) =>{
    const id = req.params.id;
    personalDetail.updateOne({_id:id},{$set : {name : req.body.name,phoneNo: req.body.phoneNo}}).then(result=>{
        res.status(200).json(result);
    })
})

module.exports = route;