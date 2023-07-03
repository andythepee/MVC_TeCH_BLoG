const Sequelize = require("sequelize");
require("dotenv").config();
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    (process.env.DB_NAME = "tech_blog"),
    (process.env.DB_USER = "root"),
    (process.env.DB_PW = "andyp123"),
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}
module.exports = sequelize;
