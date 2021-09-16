module.exports = {
  jwt_key: "api_jwt_key",
  port: "5555",

  base_url: "https://firstbitapi.herokuapp.com/",
  //http://192.168.1.105:5555/

  database: {
    development: {
      username: "b83986b5a0fcd1",
      // admin
      password: "347ea3b6",
      // null
      database: "heroku_6d9fc98f4e932ba",
      // firstbit
      host: "us-cdbr-east-04.cleardb.com",
      // localhost
      //port: "3306",
      // 8889
      dialect: "mysql",
      logging: false,
      operatorsAliases: 0,
      timezone: "+03:00",
    },
    test: {
      username: "b83986b5a0fcd1",
      // admin
      password: "347ea3b6",
      // null
      database: "heroku_6d9fc98f4e932ba",
      // firstbit
      host: "us-cdbr-east-04.cleardb.com",
      // localhost
      //port: "3306",
      // 8889
      dialect: "mysql",
      logging: false,
      operatorsAliases: 0,
      timezone: "+03:00",
    },
    production: {
      username: "b83986b5a0fcd1",
      // admin
      password: "347ea3b6",
      // null
      database: "heroku_6d9fc98f4e932ba",
      // firstbit
      host: "us-cdbr-east-04.cleardb.com",
      // localhost
      //port: "3306",
      // 8889
      dialect: "mysql",
      logging: false,
      operatorsAliases: 0,
      timezone: "+03:00",
    },
  },
};
