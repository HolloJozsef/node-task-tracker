const express = require ('express');
import User from '../models/userModel'
const router = express.Router();

router.get("/createAdmin", async(req,res)=>{
  const user = new User({
    name:'Ioji',
    email:'ioji@gmail.com',
    password:'Ioji',
    isAdmin:true
  })
  try {
    const newUser = await user.save();
    res.status(200)
      .send("Admin Created!");
  }catch (err){
    res.status(500)
      .send({message:err.message});
  }
});

module.exports = router;
