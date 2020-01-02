const express = require('express')
const breweriesController = require('../controllers/breweries')
const breweriesRoutes = express.Router()



breweriesRoutes.get('/', breweriesController.index)

module.exports = breweriesRoutes