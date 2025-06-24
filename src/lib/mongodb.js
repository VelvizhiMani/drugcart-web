import mongoose from 'mongoose';

const MONGO_URI = "mongodb://superadmin:newdrugpass@100.26.195.186:27017/mydrugcarts";

const connnectionToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connected to database");

    } catch (error) {
        console.log(error);
    }
}

export default connnectionToDatabase
