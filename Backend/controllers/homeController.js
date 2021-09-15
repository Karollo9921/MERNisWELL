// creating Controller of the Home Page constructor
class HomeController {
    constructor() {

    }

    // GET method
    getHome(req, res) {
        res.send('<h1>Hello World !</h1>')
    }
}


// exporting Controller 
export { HomeController };