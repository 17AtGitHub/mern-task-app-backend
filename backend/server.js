const express = require('express');
// const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const Task = require('./models/taskModel');
const taskRoutes = require('./routes/taskRoute');
const cors = require('cors');


const PORT = process.env.PORT || 5000
//precoess.env.PORT is created by te server where the app will be deployed
//to run the app on localhost, we will use the host 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
           console.log(`server running on port ${PORT}`);
       })
    })
    .catch((err) => {console.log(err);})

// ------------------------------------------------------------------
//middleware
// const logger = (req,res,next) => {
//     console.log("Middleware in action");
//     console.log(req.method);
//     next();
// }
//this middleware function has access to req, res object of the function from where it was called
//and also to another function next(), which gives the main function to finally run
//in the application's request/response cycle
//a custom middleware wchih comes with the express
app.use(express.json())
// app.use(express.json({ strict: false }))
app.use(express.urlencoded({extened:false}))

app.use(cors({
    origin: ["http://localhost:3000/", "https://mern-task-app.onrender.com"]//an array as later will also include the deployed server url
}));

app.use("/api/tasks", taskRoutes);
// app.use(cors({
//     origin: ["http://localhost:3000/"]//an array as later will also include the deployed server url
// }))

// -------------------------------------------------------------------------


// routes
app.get('/', (req,res) => {
    res.send('Home Page');
});








// mongodb+srv://daksh17kochhar:daksh030323@cluster0.3t1qedq.mongodb.net/?retryWrites=true&w=majority
