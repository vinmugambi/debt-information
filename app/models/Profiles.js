const Sequelize = require("sequelize");

module.exports = {
	fullName: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	nationalId: {
		type: Sequelize.BIGINT,
		allowNull: false,
		unique: true
	},
	phoneNumber: {
		type: Sequelize.BIGINT,
		allowNull: false,
		validate: {
			is: /^[0-9\-]+$/i
		}
	},
	rating:{
		type: Sequelize.FLOAT
	}
}
