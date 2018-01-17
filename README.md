# express-practice

## Purpose
This project is to store the various practice activities around express

## Usage
The application has the following routes defined and their usage notes:

### GET `/cars`:
* Returns all cars in the cars object.
* route: `/cars`
* TYPE: GET
* RES: JSON


### GET `/cars/:make`:
* Returns the first item that matches the parameter supplied in `cars/:make`
* route: `/cars/:make`
* TYPE: GET
* RES: JSON

### POST `api/new`:
* Adds a new object to the cars array
* route: `api/new`
* TYPE: POST
* REQ: JSON
    * `{"make": "Nissan", "model": "Maxima", "year": 2000, "color": "Super Black"}`
* RES: JSON