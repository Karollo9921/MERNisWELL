// import User Model
import User from '../models/User.js'

// import libs
import bcrypt from 'bcrypt';


// creating Controller of the Auth constructor
class AuthController {
    constructor() {

    }
    // POST method (register a User)
    async postRegister(req, res) {
        // let's declare the body 
        let { name, surname, dateOfBirth, password, password2 } = req.body;

        // checking if password confirmation match 
        if (password !== password2) {
            return res.status(400).json({
                message: "Password do not match !"
            });
        }

        // let's try to register User and save in Mongo database 
        try {
            // protecting password 
            const hashedPassword = await bcrypt.hash(password, 12);

            // let's check if User already exists in database (if not, we create a new one user)
            const user = await User.findOne({ $and: [{name: name}, {surname: surname}, {dateOfBirth: dateOfBirth}] });
            if (user) {
                return res.status(400).json({
                    message: "That User already exists !"
                });
            } else {
                const newUser = new User({
                    name: name,
                    surname: surname,
                    dateOfBirth: dateOfBirth,
                    password: hashedPassword
                });
        
                // saving a User in database 
                await newUser.save();

                return res.status(201).json({
                    message: "User has been created !"
                }); 
            }
        } catch (error) {
            return res.status(400).json({
                message: `Error: ${error}`
            });
        }
    };
};


// exporting Controller 
export { AuthController };