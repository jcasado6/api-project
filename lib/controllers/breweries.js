const Breweries = require('../models/Breweries')

module.exports = {
    index: (req, res) => {
        Breweries.find({}).then((breweries) => {
            res.json(breweries)
        })
    }
}