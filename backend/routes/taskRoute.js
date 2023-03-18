const express = require('express');
const router=express.Router(); //router is a method that is in express
const Task = require('../models/taskModel');
const {createTask, 
        getTasks, 
        getTask, 
        deleteTask,
        updateTask
        } = require('../controllers/taskController');

// create a task
// whenever creating a public api, generally use v1, v2, etc. in case subsequent versions released
// but because we creating private API, WE CAN DO WITHOUT TIT
// router.post('/api/tasks', createTask);
// //read/get data:
// router.get('/api/tasks', getTasks);
// //read/get a single task
// router.get('/api/tasks/:id', getTask);
// //delete a single task
// router.delete('/api/tasks/:id', deleteTask);
// //update a task: using .put method
// router.put('/api/tasks/:id', updateTask);

router.route('/')
        .get(getTasks)
        .post(createTask)

router.route('/:id')
        .get(getTask)
        .delete(deleteTask)
        .put(updateTask)

module.exports = router
