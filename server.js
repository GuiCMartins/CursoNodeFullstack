const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.json({
        "success": true
    })
});

app.listen(PORT, () => {
    console.log("Servidor aberto na porta: ", PORT);
})