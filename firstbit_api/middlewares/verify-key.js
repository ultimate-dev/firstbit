const { Keys } = require("../helper/db");

module.exports = async (req, res, next) => {
  const api_key = req.params.key;
  let key = await Keys.findOne({
    where: { key: api_key, status: 1 },
  });

  if (key) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized", errorCode: 401 });
  }
};
