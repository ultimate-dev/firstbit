module.exports = (sequelize, Sequelize) => {
  return sequelize.define("tests", {
    test_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    test: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "false",
    },
  });
};
