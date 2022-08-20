const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', (req, res) => {
    const event = req.body;
    console.log(req.body);
    try {
        axios.post('http://localhost:4000/events', event).catch((err) => {
            console.log(err.message);
        });
        axios.post('http://localhost:4001/events', event).catch((err) => {
            console.log(err.message);
        });
        axios.post('http://localhost:4002/events', event).catch((err) => {
            console.log(err.message);
        });
        axios.post('http://localhost:4003/events', event).catch((err) => {
            console.log(err.message);
        });
    }
    catch (err) {
        console.log(err);
    }


    res.sendStatus(200);
});


app.listen(4005, () => {
    console.log('listening on 4005');
});