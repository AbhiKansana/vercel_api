const express = require('express')
const mongoose = require('mongoose')
const app = express()
const user = require('./routes/user')
require('dotenv').config()
const port = process.env.PORT ||  8000

app.get('/', (req,res)=>{
    res.send("Hello, today is Saturday")
})

// Mongodb stuff
// console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true})
.then(()=>{
    console.log('Connected to mongodb atlas')
})
.catch(()=>{
    console.log("Can't connect to mongodb atlas")
})

// Middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/users',user)

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})
