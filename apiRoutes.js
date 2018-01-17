// Import car data from data.js
var cars = require("./data.js");

module.exports = function(app) {
    // create a GET route
    // in POSTMAN: GET http://localhost:8081/cars
    // Returns all items in the cars object 
    app.get("/cars", function(req, res) {
        console.log("cars", cars);
        // respond with all the cars object
        res.json(cars)
    });
    // get route that gets data by the make
    app.get("/cars/:make", function(req, res) {
        // in POSTMAN: GET http://localhost:8081/cars/Nissan
        // returns the cars object where the make === Nissan
        // Returns all items in the cars object
        // set requestedMake to the make specified in the request
        var requestedMake = req.params.make;
        for (var i = 0; i < cars.length; i++) {
            if (requestedMake === cars[i].make) {
                // return the data requested and exit the function
                return res.status(200).json({
                    success: true,
                    data: cars[i],
                    httpStatusCode: 200
                });
            }
        }
        // return this new object when a make was not found
        // so the user knows the make requested does not exist
        return res.status(418).json({
            success: false,
            message: "ERROR: The requested make: '" + requestedMake + "' was not found",
            httpStatusCode: 418
        });
    });

    // Create a POST route so that a new item can be added to the cars object array
    app.post("/api/new", function(req, res) {
        // create a variable that stores the body data
        // in POSTMAN, POST http://localhost:8081/api/new
        // body, RAW, JSON 
        // body:
        // {
        //     "make": "Chevrolet",
        //     "model": "Silverado 2500",
        //     "year": 1991,
        //     "color": "Blue"
        // }
        var newCar = req.body;
        console.log("newCar", newCar);
        cars.push(newCar);
        res.status(200).json({
            success: true,
            message: "SUCCESS: Added a new: '" + newCar.make + " " + newCar.model + "' to object 'cars'",
            data: newCar
        });
    });
};