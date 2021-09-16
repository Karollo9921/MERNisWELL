// import User Model
import User from '../models/User.js'

// import libs
import bcrypt from 'bcrypt';


// creating Controller of the Auth constructor
class AuthController {
    constructor() {

    }

    // POST method (login a User)
    async postLogin(req, res) {

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
            
            // let's check if User already exists in database (if not, we create a new one user)
            const user = await User.findOne({ 
                $and: 
                [
                    { name: name }, 
                    { surname: surname }, 
                    { dateOfBirth: dateOfBirth }
                ] 
            });
            
            // if user already exists we inform about this 
            if (user) {
                return res.status(400).json({
                    success: false,
                    isLoggedIn: req.session.isLoggedIn,
                    message: "That User already exists !"
                });
            };
            
            // protecting password 
            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = new User({
                name: name,
                surname: surname,
                dateOfBirth: dateOfBirth,
                password: hashedPassword
            });
    
            // saving a User in database 
            await newUser.save();

            // setting and saving a session 
            req.session.isLoggedIn = true;
            req.session.user = newUser;
            req.session.save();

            // returning json data about User logged in
            return res.status(201).json({
                success: true,
                isLoggedIn: req.session.isLoggedIn,
                user: req.session.user,
                message: "User has been created !"
            }); 
            
        } catch (error) {
            return res.status(400).json({
                success: false,
                isLoggedIn: req.session.isLoggedIn,
                message: `Error: ${error}`
            });
        }
    };
};


// exporting Controller 
export { AuthController };