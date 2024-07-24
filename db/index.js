import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        mongoose.connect(process.env.MONGODB_URL);
        const connection = mongoose.connection;
        connection.on('error',() => console.log('Database not Connected'));
        connection.once('open',() => console.log('Database Connected'));
    } catch (error) {
        console.log('Error while connecting to the Database', Error);
    }
}

export default connectDB;