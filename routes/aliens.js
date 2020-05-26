const express = require('express');
const router = express.Router();
const Alien = require('../models/aliens');


router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find();
        res.json(aliens);
    }catch(err){
        res.send('Error: '+ err);
    }
});

router.get('/:id', async(req, res) => {
    try{
        const aliens = await Alien.findById(req.params.id)
        res.json(aliens);
    }catch(err){
        res.send('Error in get by id :'+ err);
    }
});

router.post('/', async(req,res) => {

    const alien = new Alien({
        name : req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const postData = await alien.save();
        res.json(postData);
    }catch(err){
        res.json('Error in posting :'+err);
    }
});

router.patch('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(alien);
    }catch(err){
        res.json('Error in patching: '+ err);
    }
});

router.delete('/:id', async(req, res) => {
    try{
        Alien.findByIdAndDelete(req.params.id);
        res.json('Delete successful');
    }catch(err){
        res.json('Error in deleting: '+ err);
    }
})

module.exports = router;