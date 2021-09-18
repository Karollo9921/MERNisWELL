// import libs 
import mongoose from 'mongoose';
import MongoDBStore  from 'connect-mongodb-session';
import session from 'express-session';
import { config } from 'dotenv';

// declare where we will store our sessions 
config();
const MongoStore = MongoDBStore(session);
const store = new MongoStore({
    uri: process.env.MONGO_URI,
    collection: 'sessions'
});

// connecting to MongoDB 
const connectToMongoDB = async () => {
    // declare a connection 
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

          console.log(`MongoDB Connected: ${connection.connection.host}`);

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    };
};

// export function and session store
export default connectToMongoDB;
export { store };