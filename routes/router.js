const express = require('express');
const router = express.Router();
const formLoader = require('../controllers/form');


router.get('/', formLoader);



module.exports = router;