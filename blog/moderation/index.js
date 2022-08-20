const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());

app.post('/event', (req, res) => {

});

app.listen(4003, () => {
    console.log('listening on port 4003');
})