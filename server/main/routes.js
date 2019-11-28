var express = require('express');
var router = express.Router();

router.get('/api/hello', function (req, res) {
  res.json('hello world');
})

module.exports = router