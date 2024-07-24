import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/mongoDB.js";
import medicineRoute from './routes.js'
import connectRedis from "./db/redis.js";
dotenv.config();

const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.json());

app.use('/api/medicine', medicineRoute);

const port = process.env.PORT || 3000;

connectDB().then(() => {
    connectRedis().then(() => {
        app.listen(port, () => {
            console.log(`Server started at ${port}`);
        });
    })
}).catch(err => {
    console.log("MongoDB connection failed. Server not started");
    console.error(err);
});