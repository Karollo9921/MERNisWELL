// import library
import { Router } from 'express';

// import Controller 
import { HomeController } from '../controllers/homeController.js';

// creating Route constructor
class HomeRoute {
    constructor() {
        this.router = Router();
        this.runRoutes();
    }

    // executing our Route 
    runRoutes() {
        this.router.get('/', new HomeController().getHome)
    }
}

// exporting Route 
export { HomeRoute };