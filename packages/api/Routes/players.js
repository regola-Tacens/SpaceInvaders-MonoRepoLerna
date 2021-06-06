const express = require('express')
const router = express.Router()
const Player = require('../Models/player')

router.get('/', async(req, res)=>{

    // res.send('get request')

    try{
        const players = await Player.find()
        res.json(players)
    }catch (err){
        res.send('error : ' + err)
    }
})

router.delete('/:id', async(req, res)=>{

    try {
    const player = await Player.findByIdAndDelete(req.params.id)
    res.json(player)
    } catch (err) {
        res.send('error : ' + err)  
    }
})

router.post('/', async(req, res)=>{
    const player = new Player({
        name : req.body.name,
        score : req.body.score
    })
    try
    {
       const p1 = await player.save()
        res.json(p1)
    }
    catch (err)
    {
        res.send('error : ' + err)  
    }
})

module.exports = router