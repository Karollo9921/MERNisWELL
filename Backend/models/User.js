// import mongoose
import mongoose from 'mongoose';

// declare MongoDB Schema
const Schema = mongoose.Schema;

// create a User Schema Model
const userSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    password: { type: String, required: true }
});

//export User Schema
export default mongoose.model('User', userSchema);