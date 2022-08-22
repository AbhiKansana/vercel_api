const express = require('express')
const router = express()
const userModel = require('../models/user')

// & Post Request

router.post('/', async (req,res)=>{
     const current = userModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
     })

     try{
        const now = await current.save()
        res.status(200).send(now)
     }

     catch{
        res.send("some bug, fix it")
     }
})

// & GET Request
router.get('/', async(req,res)=>{
     
    try{
        const cur = await userModel.find()
        res.send(cur)
    }

    catch{
        res.status(400).send("Can't find")
    }
})

// & GET SINGLE user
router.get('/:id', async(req,res)=>{

    try{
        const cur = await userModel.findById(req.params.id)
        res.status(200).send(cur)
    }

    catch{
        res.status(400).send("error")
    }
})


module.exports = router