const router = require("express").Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    res.send("hello users!");
  } catch (error) {
    next(error);
  }
});
