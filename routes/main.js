const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') 

router.get('/', homeController.getDichos)

// router for creating dicho
router.post('/addDicho', homeController.addDicho)

module.exports = router