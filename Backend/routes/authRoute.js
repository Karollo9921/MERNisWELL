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
        this.router.post('/register', new AuthController().postRegister);
        this.router.get('/login', new AuthController().getLogin);
        this.router.post('/login', new AuthController().postLogin);
        this.router.post('/logout', new AuthController().postLogout);
    }
}


// exporting Route 
export { AuthRoute };