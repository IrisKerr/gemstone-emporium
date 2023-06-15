const express = require('express');
const router = express.Router();

// controllers
const shopController = require('./controllers/shopControllers');

// affichage accueil
router.get('/', shopController.index);


module.exports = router;