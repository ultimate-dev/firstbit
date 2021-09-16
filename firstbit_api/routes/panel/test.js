const router = require("express").Router();
// DB
const { Test } = require("../../helper/db");
// GET
router.route("/").get(async (req, res) => {
  await Test.create({
    test: "get",
  });
  res.send("Merhaba Dünya Ben Panel");
});
// POST
router.route("/").post(async (req, res) => {
  await Test.create({
    test: "post",
  });
  res.send("Merhaba Dünya Ben Panel");
});
// PUT
router.route("/").put(async (req, res) => {
  await Test.create({
    test: "put",
  });
  res.send("Merhaba Dünya Ben Panel");
});
// DELETE
router.route("/").delete(async (req, res) => {
  await Test.create({
    test: "delete",
  });
  res.send("Merhaba Dünya Ben Panel");
});

module.exports = router;
