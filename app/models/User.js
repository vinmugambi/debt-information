const Sequelize = require("sequelize")

const account = {
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			is: /^[a-z0-9\_\-]+$/i
		}
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	role: {
		type: Sequelize.STRING,
		allowNull: false
	},
	salt: {
		type: Sequelize.STRING
	}
}

module.exports = account;
