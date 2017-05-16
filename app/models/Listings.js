const Sequelize = require("sequelize");

module.exports = {
    debtAmount: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
    },
    dateDue: {
        type: Sequelize.STRING,
        defaultValue: new Date(Date.now()+1000*60*60*24*60).toLocaleDateString()
    },
    amountPaid: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
    },
    dateOfIssue: {
         type: Sequelize.STRING,
         defaultValue: new Date().toLocaleDateString()
    }
}
