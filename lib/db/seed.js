const mongoose = require('./connection')
const data = require('./breweries.json')

const Breweries = require('../models/Breweries')

Breweries.deleteMany({}).then(() => {
    Breweries
        .create(data).then((dataReturn) => {
            console.log('dataReturn')
            process.exit()
        })
        .catch((err) => {
            console.log('blown', err)
        })
})