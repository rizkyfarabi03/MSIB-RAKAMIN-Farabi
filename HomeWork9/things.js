var express = require('express');
var router = express.Router();

router.get('/:name', function (req, res) {
    res.send('hello rakamin academy' + req.params.name);
});

router.post('/', function (req, res) {
    res.send('hello farabi!!! from post')
});

router.put('/put', function (req, res) {
    res.send('hello farabi!!! from put')
});

module.exports = router;