var express = require('express');
var router = express.Router();

const getCardData = require('./services/cardService');

router.get('/', function(req, res, next){
    res.json(getCardData());
});

module.exports = router;
