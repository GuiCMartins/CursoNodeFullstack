const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const api = require('./routes');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        "success": true
    })
});

app.use('/api', api);

app.listen(process.env.PORT, () => {
    console.log("Servidor aberto na porta: ", process.env.PORT);
})