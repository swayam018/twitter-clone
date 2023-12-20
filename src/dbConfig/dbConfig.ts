import mongoose from "mongoose";

export async function connects() {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/twitter-clone');
        
        console.log("Connected to MongoDB:", connection.connection.host);
    } catch (error:any) {
        console.error("Error while connecting to MongoDB:", error.message);
    }
}
