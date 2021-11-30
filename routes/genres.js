const express=require('express');
const router=express.Router(); //returns a Router object
const genres=[
    {id:1, name:"action"},
    {id:2, name:"comedy"},
    {id:3, name:"romance"}
];


router.get('/',(req,res)=>{
    return res.send(genres)
    });
    
router.post('/',(req,res)=>{
    if(!req.body.name||req.body.name.length<3){
        return res.status(400).send('name is not valid');
    }
    const genre={id:genres.length+1,name:req.body.name};
    genres.push(genre);
    return res.send(genre);
    });
    
router.put('/:id',(req,res)=>{
        const genre=genres.find(g=>g.id===parseInt(req.params.id));
        if(!genre){
            return res.status(404).send('genre not found');
        }
        if(!req.body.name){
            return res.status(400).send('name is not valid');
        }
        genre.name=req.body.name;
        return res.send(genre);
    });
    
router.delete('/:id',(req,res)=>{
    const genre=genres.find(g=>g.id===parseInt(req.params.id));
    if(!genre){return res.status(404).send('genre not found');}
    const index=genres.indexOf(genre);
    genres.splice(index,1);
    return res.send(genre)
    });

module.exports=router;