const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a task"]
        },
        complete: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true //automatically creates timestamps for any updation of the task in its schema
    }
)

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;