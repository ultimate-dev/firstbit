const verifyToken = require("../../middlewares/verify-token");
const verifykey = require("../../middlewares/verify-key");
// Routes
const testRouter = require("./test");
const authRouter = require("./auth");
const algsRouter = require("./algs");
const accountRouter = require("./account");

module.exports = (app) => {
  app.use("/:key", verifykey);
  app.use("/:key/test", testRouter);
  app.use("/:key/auth", authRouter);
  app.use("/:key/api", verifyToken);
  app.use("/:key/api/account", accountRouter);
  app.use("/:key/", algsRouter);
};
