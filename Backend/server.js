// import App constructor
import { App } from './app';

// import declared place to store sessions 
import { store } from './db/dbConnection.js';

// import libs 
import express from 'express';
import session from 'express-session';

// import routes
import { HomeRoute } from './routes/homeRoute.js';
import { AuthRoute } from './routes/authRoute.js';


// initializing an App
const app = new App(
    2000,
    [
        express.json(),
        session({
            secret: 'secret', 
            resave: false, 
            saveUninitialized: false,
            store: store
        })
    ],
    [ 
        new HomeRoute(),
        new AuthRoute(),
    ]
);


// running our server
app.listen();