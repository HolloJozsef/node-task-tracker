const mongoose =require ('mongoose');

const taskSchema = new mongoose.Schema({
  name:{type:String,required:true},
  userName:{type:String,required:true,unique:true, dropDups:true},
  time:{type:String,required:true},
  finished:{type:Boolean,required:true ,default:false}
})

const taskModel = mongoose.model("Task",taskSchema);

export default taskModel;
