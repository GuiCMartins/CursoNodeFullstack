const router = require('express').Router();
const apiPortifolio = require('./portifolio');

require('../db/mongoConnect')

router.get('/', (req, res) => {
    res.json({
        success: false,
        teste: 'Não é possível acessar esta rota!!!'
    })
})

router.use('/portifolio', apiPortifolio);

module.exports = router;