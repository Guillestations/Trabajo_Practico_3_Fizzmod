import express from 'express';

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('pafina web de inicio')
});

router.get('/info', (req, res) =>{
    res.send('Desde la web de info')
})

module.exports = router;