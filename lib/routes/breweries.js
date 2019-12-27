const express = require('express')
const breweriesController = require('../controllers/breweries')
const breweriesRoutes = express.Router()
const Breweries = require('../models/Breweries')

breweriesRoutes.route('/').get((req, res) => {
    Breweries.find((err, Breweries) => {
        if (err) {
            console.log(err);
        } else {
            res.json(Breweries);
        }
    });
});

breweriesRoutes.route('/:id').get((req, res) => {
    const id = req.params.id;
    Breweries.findById(id, (err, Breweries) => {
        res.json(Breweries);
    });
});

breweriesRoutes.route('/add').post((req, res) => {
    const brewery = new brewery (req.body);
    Breweries.save()
        .then(Breweries => {
            res.status(200).json({'breweries': 'brewery added!'});
        })
        .catch(err => {
            res.status(400).send('adding brewery failed');
        });
});

breweriesRoutes.route('/update/:id').post((req, res) => {
    Breweries.findById(req.params.id, (err, Breweries) => {
        if (!Breweries)
            res.status(404).send("not found");
        else
            brewery.name = req.body.name;
            brewery.brewery_type = req.body.brewery_type;
            brewery.street = req.body.street;
            brewery.city = req.body.city;
            brewery.state = req.body.st;
            brewery.postal_code = req.body.postal_code;
            brewery.phone = req.body.phone;

            brewery.save().then(todo => {
                res.json('brewery updated!');
            })
            .catch(err => {
                res.status(400).send("Update failed");
            });
    });
});

breweriesRoutes.get('/', breweriesController.index)

module.exports = breweriesRoutes