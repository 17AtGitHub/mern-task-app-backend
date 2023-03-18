const mongoose = require('mongoose');

const connectDB = async () => {
     try {
        const URI = process.env.MONGO_URI
        const connect = await mongoose.connect(URI);
        console.log(`MongoDB connected`);
     } catch (error) {
        console.log(error);
        //so if there is an error, exit the process, so further steps get stalled
        process.exit(1);//exit from the process
     }
}

module.exports = connectDB

//use this function inside server.js to connect to the mongoDB and then start the server

// const startServer = async () => {
//    try {
//        await connectDB();
//        app.listen(PORT, () => {
//            console.log(`server running on port ${PORT}`);
//        })
//    } catch (error) {
//        console.log(error);
//    }
// }

// startServer();