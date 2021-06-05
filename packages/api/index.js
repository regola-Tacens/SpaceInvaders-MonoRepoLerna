const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/spaceInvadersPlayers'
const app =express()
const cors = require('cors')
const bodyParser = require("body-parser");
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url, {useNewUrlParser : true,useUnifiedTopology: true})
const con = mongoose.connection

con.on('open',()=>{
    console.log('connected')
})

const  PlayersRouter = require ('./Routes/players')
app.use('/players', PlayersRouter)

app.listen(8080, ()=> {
    console.log('server started')
})