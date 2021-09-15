// import App constructor
import { App } from './app';

// import routes
import { HomeRoute } from './routes/homeRoute.js';


// initializing an App
const app = new App(
    2000,
    [

    ],
    [ 
        new HomeRoute(), 
    ]
);


// running our server
app.listen();