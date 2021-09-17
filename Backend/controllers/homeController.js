// creating Controller of the Home Page constructor
class HomeController {
    constructor() {

    }

    // GET method
    getHome(req, res) {
        return res.json({
            isLoggedIn: req.session?.isLoggedIn || false,
            user: req.session?.user || null
        });   
    }
}


// exporting Controller 
export { HomeController };