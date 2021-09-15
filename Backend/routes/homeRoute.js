// import library
import { Router } from 'express';

// import Controller 
import { HomeController } from '../controllers/HomeController.js';


// creating Route constructor
class HomeRoute {
    constructor() {
        this.router = Router();
        this.runRoutes();
    }

    runRoutes() {
        this.router.get('/', new HomeController().getHome)
    }
}


// exporting Route 
export { HomeRoute };