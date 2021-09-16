// import library
import { Router } from 'express';

// import Controller 
import { AuthController } from '../controllers/AuthController.js';


// creating Route constructor
class AuthRoute {
    constructor() {
        this.router = Router();
        this.runRoutes();
    }

    runRoutes() {
        this.router.post('/register', new AuthController().postRegister)
    }
}


// exporting Route 
export { AuthRoute };