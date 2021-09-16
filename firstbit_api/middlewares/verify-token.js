const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.headers["x-access-token"] || req.body.token || req.query.token) {
    const token =
      req.headers["x-access-token"].replace("Bearer", "").trim() ||
      req.body.token ||
      req.query.token;
    if (token) {
      jwt.verify(token, req.app.get("jwt_key"), (err, decoded) => {
        if (err) {
          res.json({
            status: false,
            message: "Failed to authenticate token.",
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.json({
        status: false,
        message: "No token provided.",
      });
    }
  } else {
    res.json({
      status: false,
      message: "No token provided.",
    });
  }
};
