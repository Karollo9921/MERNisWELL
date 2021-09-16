// import App constructor
import { App } from './app';

// import libs 
import express from 'express';

// import routes
import { HomeRoute } from './routes/homeRoute.js';
import { AuthRoute } from './routes/authRoute.js';


// initializing an App
const app = new App(
    2000,
    [
        express.json(),
    ],
    [ 
        new HomeRoute(),
        new AuthRoute(),
    ]
);


// running our server
app.listen();