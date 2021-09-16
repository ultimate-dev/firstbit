// Routes
const testRouter = require("./test");
const authRouter = require("./auth");
const adminRouter = require("./admin");
const usersRouter = require("./users");

const verifyToken = require("../../middlewares/verify-token");

const prefix = "/panel";

module.exports = (app) => {
  app.use(prefix + "/test", testRouter);

  app.use(prefix + "/auth", authRouter);
  app.use(prefix + "/api", verifyToken);
  app.use(prefix + "/api/admin", adminRouter);
  app.use(prefix + "/api/users", usersRouter);
};
