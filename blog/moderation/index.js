const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    console.log(type);
    if (type === 'CommentCreated') {

        const status = data.content.includes('orange') ? 'rejected' : 'approved';
        console.log(status);
        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
            .catch((err) => {
                console.log(err.message);
            });
    }

    res.send({});
});

app.listen(4003, () => {
    console.log('listening on port 4003');
})