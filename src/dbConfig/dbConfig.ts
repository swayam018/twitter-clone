import mongoose from "mongoose";

export async function connects() {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL!);
    } catch (error:any) {
        console.error("Error while connecting to MongoDB:", error.message);
    }
}
 