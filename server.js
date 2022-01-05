const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const TaskModel = require("./module/task");
const port = 5000;

mongoose.connect(
    "mongodb://localhost:27017/TaskApp"
).then(()=>console.log("mongodb connected"));

app.post("/api/AddTask",(req,res)=>{
   const newTask = req.body;
   const data = TaskModel.create(newTask);
   if(data){
      return res.json({data:"registration sucessfully"});
   }
});

app.get("/api/display",async(req,res)=>{
    const alldata = await TaskModel.find();
    if(alldata){
        return res.json({data:alldata});
    }
    return res.json({data:"no data found"});
});

app.listen(port,()=>{
    console.log(`App running on ${port}`);
})