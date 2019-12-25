const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const BreweriesSchema = new Schema({
    "name": String,
    "brewery_type": String,
    "street": String,
    "city": String,
    "state": String,
    "postal_code": String,
    "phone": String,
})

const Breweries = mongoose.model('Breweries', BreweriesSchema)