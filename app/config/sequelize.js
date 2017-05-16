const Sequelize = require("sequelize");
const  sequelize = new Sequelize('postgres://debt:mugambi@localhost:5432/used')

module.exports = sequelize
