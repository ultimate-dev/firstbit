const Sequelize = require("sequelize");
const dbconfig =
  require("../configs").database[process.env.NODE_ENV || "development"];

let db = {};

let sequelize;

if (dbconfig.use_env_variable)
  sequelize = new Sequelize(process.env[dbconfig.use_env_variable], dbconfig);
else
  sequelize = new Sequelize(
    dbconfig.database,
    dbconfig.username,
    dbconfig.password,
    dbconfig
  );

// Models
//> Test
db.Test = require(__dirname + "/../models/Test/Test.js")(sequelize, Sequelize);
db.Users = require(__dirname + "/../models/Users/Users.js")(sequelize, Sequelize);
db.Keys = require(__dirname + "/../models/Keys/Keys.js")(sequelize, Sequelize);
db.Admins = require(__dirname + "/../models/Admins/Admins.js")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
