var express = require("express");
var router = express.Router();

/* GET home page. */
router.get(/^\/apple\/?(\w+)?$/, function (req, res, next) {
  var id = req.params[0];
  res.send(id);
});

module.exports = router;
