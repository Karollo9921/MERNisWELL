// import App constructor
import { App } from './app';

// import declared place to store sessions 
import { store } from './db/dbConnection.js';

// import libs 
import express from 'express';
import session from 'express-session';
import cors from 'cors';

// import routes
import { HomeRoute } from './routes/homeRoute.js';
import { AuthRoute } from './routes/authRoute.js';

// initializing an App
const app = new App(
    [
        cors({ 
            origin: "http://localhost:3000",
            methods: '*',
            credentials: true 
        }),
        express.json({ type: "application/json" }),
        express.urlencoded({ extended: true }),
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