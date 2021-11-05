var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send('respond with a card deck');
});



module.exports = router;