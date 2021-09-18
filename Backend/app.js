// import libs
import express from 'express';
import { config } from 'dotenv';
import path from 'path';
const __dirname = path.resolve();

// import db connection
import connectToMongoDB from './db/dbConnection.js';

// creating and export App constructor
class App {
    constructor(middlewares, routes) {
        this.app = express();
        this.app.set('trust proxy', 1);
        config();
        
        this.buildFrontendOnProd();
        
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
            this.app.use('/', this.allowCrossDomain, route.router);
        });
    };

    // set headers 
    allowCrossDomain(req, res, next) {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    };

    // build fronted after deploy 
    buildFrontendOnProd() {
        if (process.env.NODE_ENV === 'production') {
            this.app.use(express.static(path.join(__dirname, '/frontend/build')));
    
            this.app.get('*', (req, res) =>
              res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
            );
          } else {
            this.app.get('/', (req, res) => {
              res.send('API is running....');
            })
          }
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
