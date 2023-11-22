// import the Sequelize constructor from the library

const Sequelize = require('sequelize');

const port = process.env.PORT || 3001;
const nodeEnv = process.env.NODE_ENV || 'development';


require('dotenv').config();
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
