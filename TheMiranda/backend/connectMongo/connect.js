
// Import mongoose ORM
import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
    try {

        // Connect to MongoDB
        const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/myapp";
        console.log("MongoDB Connection URL:", mongoURL);

        // Create a connection
        const conn = await mongoose.connect(mongoURL, {
            dbName: "my_database"
        });

        // Log the connection
        // console.log("Connected to MongoDB!", conn.connection.host);
        console.log("Connection database: ", conn.connection.name);
    } catch (error) {
        console.error(`Error to connect: ${error}`);
    }
}

export default connectDB;