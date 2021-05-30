import * as mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true, dropDups:true},
  password:{type:String,required:true},
  isAdmin:{type:Boolean,required:true ,default:false}
})

const taskModel = mongoose.model("Task",taskSchema);

export default taskModel;
