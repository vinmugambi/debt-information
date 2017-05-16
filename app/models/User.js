const Sequelize = require("sequelize")

const account = {
	_id: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			is: /^[a-z0-9\_\-]+$/i
		}
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phoneNumber: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			is: /^[0-9\-]+$/i
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
