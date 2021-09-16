import mongoose from 'mongoose';

// connecting to MongoDB 
const connectToMongoDB = async () => {
    // declare a connection 
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            // useFindAndModify: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
          });

          console.log(`MongoDB Connected: ${connection.connection.host}`);

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    };
};


// export function 
export default connectToMongoDB;