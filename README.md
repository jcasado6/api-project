# Brewery-Tracker-API

## Technologies Used
* Mongoose
* MongoDB
* Node.js
* Express

## Description & Features
The Brewery Tracker API contains information about breweries in the Washington DC area. Each object contains information on the name, the type of brewery, the address, and the brewery's phone number.

This project was to build a JSON API from the ground up. The API is comprised of a JSON file with raw data from [here](https://www.openbrewerydb.org/).

## Example
This is an example object from the API:
```
  {
    "_id" : ObjectId("5e038ea2407f7d5bae38922d"),
	"name" : "AdMerk Corp. Inc.",
	"brewery_type" : "contract",
	"street" : "20 F St NW",
	"city" : "Washington",
	"state" : "District of Columbia",
	"postal_code" : "20001-6700",
	"phone" : "6172028069",
	"__v" : 0
  },
```
Each object represents one brewery

## Getting Started
### Base URL: 
// install dependencies

| Query | Path | Description | 
|:--------:|:-------:| ------------|
| **GET** | `/breweries` | find all breweries in the database |
| **GET** | `/:id` | find by a brewery by id | 
| **POST** | `/add` | add a new brewery to the |database | 
| **POST** | `/update/:id` | update current brewery in the database  |
| **DELETE** | `/:id` | delete a brewery by id |

## Goals
* Build an API using Express and Mongoose.
* Write at least one model.
* Incorporate complete CRUD functionality with RESTful routes.
* Write thorough documentation.
* Retrieve data from a data set to populate the database.

In the future, I would like to improve upon this API by...
* Using Swagger or apidoc for improved documentation.
* Have the server require a authentication token to accept requests

## Contribution Guidelines
If you would like to contribute code, identify bugs, or propose improvements, please fork this repository and submit a pull request with your suggestions. Below are some links to help you get started:
1. [Project's main repository](https://github.com/jcasado6/api-project)
2. [Project's issue tracker](https://github.com/jcasado6/api-project/issues)