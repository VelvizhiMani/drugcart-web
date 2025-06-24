import mongoose from 'mongoose';

const MONGO_URI = "mongodb://superadmin:newdrugpass@3.83.154.29:27017/mydrugcarts";

const connnectionToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connected to database");

    } catch (error) {
        console.log(error);
    }
}

export default connnectionToDatabase
