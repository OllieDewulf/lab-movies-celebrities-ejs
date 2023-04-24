const express = require('express').Router()
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity');
});

router.post('/create', async (req, res) => {
    try {
        const newCelebrity = await Celebrity.create(req.body);
        res.direct(`/celebrities`);
    } catch(err) {
        res.render('celebrities/new-celebrity', { error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
      const celebrities = await Celebrity.find();
      res.render('celebrities/celebrities', { celebrities });
    } catch (err) {
      console.log(err);
      res.send('Error retrieving celebrities');
    }
  });
  

module.exports = router