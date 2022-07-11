const {Tasks} =require('../models/Tasks.js')
const { Router } = require("express")
const router = Router()

router.get('/user', async (req, res) =>{
    try{
        const allUsers = await Users.findAll()
        res.send(allUsers)
    } catch (error){
        console.log(error)
    }
})

module.exports = router