const express = require('express')
const app = express()
const breweriesRoutes = require('./lib/routes/breweries')
const parser = require("body-parser");
const cors = require('cors')
const Breweries = require('./lib/models/Breweries')


app.use(parser.json());
app.use(cors())

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
        res.json(Breweries)
    });
});

breweriesRoutes.route('/add').post((req, res) => {
    let breweries = new Breweries(req.body);
    breweries.save()
        .then(Breweries => {
            res.status(200).json({ 'breweries': 'brewery added!' });
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
            Breweries.name = req.body.name;
        Breweries.brewery_type = req.body.brewery_type;
        Breweries.street = req.body.street;
        Breweries.city = req.body.city;
        Breweries.state = req.body.street;
        Breweries.postal_code = req.body.postal_code;
        Breweries.phone = req.body.phone;

        Breweries.save().then(Breweries => {
            res.json('brewery updated!');
        })
            .catch(err => {
                res.status(400).send("Update failed");
            });
    });
});


breweriesRoutes.route('/:id').delete((req, res) => {
    Breweries.findByIdAndDelete(req.params.id, (err, Breweries) => {
        if (!Breweries)
            res.status(404).send("not found");
        else
            Breweries.id = req.body.id;
    });
});


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

app.use('/breweries', breweriesRoutes)
