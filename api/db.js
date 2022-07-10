require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   {
//     logging: false,
//     native: false,
//   }
// );

const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/todolist');


module.exports = {

    sequelize,
}
