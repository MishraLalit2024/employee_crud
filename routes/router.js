const express = require('express');
const router = express.Router();
const formLoader = require('../controllers/form');
const checkUserExists = require('../controllers/newUser');


router.get('/', formLoader);

router.post('/register', (req, res)=>{
    console.log("Reached Here");
    console.log(req.body);
    checkUserExists(req, res);
})



module.exports = router;