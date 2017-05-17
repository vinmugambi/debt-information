const Sequelize = require("sequelize");

/*
*Change the connection string to suit your database name, password, port ,host address,and user
*ie const sequelize = new Sequelize('postgres://db_username:db_password@db_host:db_port/db_name')
*/
const sequelize = new Sequelize('postgres://dev001​:EV5gy2pQPDhC4H&fg3$5qzWL*9P4=D2K8ta9x&Qr2@51.140.33.76:​6773​/testdb')

module.exports = sequelize
