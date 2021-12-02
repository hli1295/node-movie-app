const {Genre}=require('../model/genre');
const mongoose=require('mongoose');
const express=require('express');
const router=express.Router(); //returns a Router object


router.get('/',async (req,res)=>{
    const genres=await Genre.find().sort();
    res.send(genres)
    });
    
router.post('/',async (req,res)=>{
    // const {error}=validateGenre(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    let genre=new Genre({name:req.body.name});
    genre=await genre.save();
    res.send(genre);
    });
    
router.put('/:id',async (req,res)=>{
    // const {error}=validateGenre(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    const genre=await Genre.findByIdAndUpdate(req.params.id,{name:req.body.name},{
        new:true
    });
    if(!genre){ return res.status(404).send('genre not found');}    
    res.send(genre);
    });
    
router.delete('/:id',async (req,res)=>{
    const genre=await Genre.findByIdAndUpdate(req.params.id);
    if(!genre){return res.status(404).send('genre not found');}
    res.send(genre)
    });

module.exports.router=router;