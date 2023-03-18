const { findByIdAndDelete } = require('../models/taskModel');
const Task = require('../models/taskModel');

// create a task
// whenever creating a public api, generally use v1, v2, etc. in case subsequent versions released
// but because we creating private API, WE CAN DO WITHOUT TIT
const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

const getTasks = async (req,res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(err){
        res.status(500).json({msg: err.message});
    }
}

const getTask = async (req,res) => {
    try {
        //req.params is a json object, I need to destructure the onject to retrieve the id
        const {id} =req.params;
        const task = await Task.findById(id);
        if(!task){
            res.status(404).json({err: `task with id: ${id} not found`});
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
}

//update a task
const deleteTask = async (req,res) => {
    try {
        const {id} = req.params;
        // console.log(id);
        // res.send(`id received: ${id}`);
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            res.status(404).json({err: `task with id: ${id} not found`});
        }
        res.status(200).json({msg: 'Task Deleted'});
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
}

//update a task
const updateTask = async(req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {new: true, runValidators: true}
        )
        if(!task){
            res.status(404).json({err: `task with id: ${id} not found`});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}
