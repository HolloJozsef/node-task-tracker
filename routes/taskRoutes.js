const express = require ('express');
import Task from '../models/taskModel'

const router = express.Router();

router.get("/",async (req,res)=>{
  try{
    const tasks = await Task.find({});
    return res.send(tasks);
  }
  catch (error){
    return res.status(404).send({ message: 'No tasks Found.' });
  }
});

router.post("/",async (req,res)=>{
    const task = new Task({
      name:req.body.name,
      userName:req.body.userName,
      time:req.body.time,
      finished:req.body.finished
  })
  try {
    const newTask = await task.save();
    return res.status(201).send({message:"New task created",data:newTask});
  }catch (err ){
    return res.status(500).send({message:"Error in creating task"});
  }
});
router.put("/:id", async (req,res)=>{
  const taskId = req.params.id;
  const task = await Task.findById(taskId);
  task.name=req.body.name;
  task.userName=req.body.userName;
  task.time=req.body.time;
  task.finished=req.body.finished;
  try {
    const updatedTask = await task.save();
    return res
      .status(200)
      .send({message:"Task Updated",data:updatedTask})
  }catch (err){
    return res.status(500).send("Error updating task");
  }
});
router.delete("/:id", async (req,res)=>{
  const deletedTask = await Task.findById(req.params.id);
 try{
   await deletedTask.remove();
   res.send({message:"Task deleted"});
 }catch (err){
   res.send("Error in deletion");
 }
});

module.exports = router ;
