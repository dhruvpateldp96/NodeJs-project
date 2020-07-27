const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")


router.get('/', (req,res) => {
    res.send("Hello")
})

router.post('/signup',(req,res) => {
    const {name, password, email} = req.body
    if (!email || !password || !name){
        return res.status(422).json({error:"please add all the fields"})
    }
    // res.json({message:"successfullt posted"})

    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exists by that mail"})
        }
        const user = new User({
            email,
            password,
            name
        })

        user.save()
        .then(user =>{
            res.json({message:"saved successfully"})
        })
        .catch((err) =>{
            console.log(err)
        })
    })
    .catch((err) => {
        console.log(err)
    })
})
module.exports = router