// import libs
import express from 'express';
import { config } from 'dotenv';

// import db connection
import connectToMongoDB from './db/dbConnection.js';


// creating and export App constructor
class App {
    constructor(middlewares, routes) {
        this.app = express();
        config();
        
        this.port = process.env.PORT || 3000;

        connectToMongoDB();

        this.useMiddlewares(middlewares);
        this.useRoutes(routes);
    };
    
    // we will use middlewares in the constructor
    useMiddlewares(middlewares) {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    };

    // we will use routes in the constructor
    useRoutes(routes) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    };

    // listen the server
    listen() { 
        this.app.listen(this.port, () => {
            console.log(`This server is running on PORT: ${this.port}`);
        })
    };
};


// we export the constructor
export { App };
