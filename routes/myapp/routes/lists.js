var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/apple", function (req, res, next) {
  res.send("사과입니다");
});
router.get("/apple/:id", function (req, res, next) {
  res.send(req.params);
});

// router.get(/^\/apple\/(\w+)$/, function (req, res, next) {
//   var apple = { id: req.params[0] };
//   res.send(apple);
// });

module.exports = router;
