const Sequelize = require("sequelize");

/*
*Change the connection string to suit your database name, password, port ,host address,and user
*ie const sequelize = new Sequelize('postgres://db_username:db_password@db_host:db_port/db_name')
*/
const sequelize = new Sequelize('postgres://debt:mugambi@localhost:5432/used')

module.exports = sequelize
