const express = require('express')
const breweriesController = require('../controllers/breweries')

const breweriesRouter = express.Router()

breweriesRouter.get('/', breweriesController.index)

module.export = breweriesRouter