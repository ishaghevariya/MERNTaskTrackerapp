const mongoose=require("mongoose");

const TaskSchema = mongoose.Schema({
    Task:String,
    date_time:String,
    reminder:Boolean
});

const TaskModel = mongoose.model("Task",TaskSchema,"Task");

module.exports = TaskModel;