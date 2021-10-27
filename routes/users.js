var express = require('express');
var router = express.Router();

variable = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  variable ++
  res.send('User accesses are: ' + variable);
});



module.exports = router;
