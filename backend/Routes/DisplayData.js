const express = require('express')
const router = express.Router()

router.post('/foodata',(req,res)=>{
    try{
        console.log(global.food_items);
        res.send([global.food_items,foodCategory])
    }catch(error){
        console.log(error);
        res.send("Server error occurred")
    }
})


module.exports = router;