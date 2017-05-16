const Models = require("./app/models");
const chalk = require("chalk");
const connection = require("./app/config/sequelize");

var Listings = Models.Listings;
var Profiles = Models.Profiles;

var Debtor = Listings.belongsTo(Profiles, { as: "debtor" });

connection.sync({ force: true })
	.then(() => {
		debtAmount: 200.00,
			Listings.create({
				debtor: {
					fullName: "SINATRA MWENDA",
					nationalId: 32290939,
					phoneNumber: 700455049,
				}
			},
				{
					include: [Debtor]
				}
			);

		Listings.create({
			debtAmount: 456.06,
			amountPaid: 300.00,
			dateDue: new Date(Date.now() + 1000 * 60 * 60 * 24 * 100).toLocaleDateString(),
			debtor: {
				fullName: "DEBORAH MWANGI",
				nationalId: 23894000,
				phoneNumber: 784558006
			}
		},
			{
				include: [Debtor]
			}
		);


		Listings.create({
			debtAmount: 10000.56,
			amountPaid: 4550.00,
			dateDue: new Date(Date.now() + 1000 * 60 * 60 * 24 * 100).toLocaleDateString(),
			debtor: {
				fullName: "DENNIS ODHIAMBO",
				nationalId: 26899300,
				phoneNumber: 709000056,
			}
		},
			{
				include: [Debtor]
			}
		);

		Listings.create({
			debtAmount: 189499.56,
			amountPaid: 2999.00,
			dateDue: new Date(Date.now() + 1000 * 60 * 60 * 24 * 34).toLocaleDateString(),
			dateOfIssue: "1/5/2017",
			debtor: {
				fullName: "AGNES WAMBUA",
				nationalId: 22394900,
				phoneNumber: 735898024,
			}
		},
			{
				include: [Debtor]
			})

		Listings.create({
			debtAmount: 100.56,
			amountPaid: 20.00,
			dateDue: new Date(Date.now() + 1000 * 60 * 60 * 24 * 34).toLocaleDateString(),
			dateOfIssue: "2/3/2017",
			debtor: {
				fullName: "HANNAH SIMIYU",
				nationalId: 21909048,
				phoneNumber: 748895809,
			}
		},
			{
				include: [Debtor]
			}
		);

		Listings.create({
			debtAmount: 100.56,
			amountPaid: 20.00,
			dateDue: new Date(Date.now() + 1000 * 60 * 60 * 24 * 34).toLocaleDateString(),
			dateOfIssue: "29/4/2017",
			debtor: {
				fullName: "ALLAN MURAYA",
				nationalId: 34009587,
				phoneNumber: 795880580,
			}
		},
			{
				include: [Debtor]
			}
		);
	})


	.then(() => {
		//create timeout to ensure that it does not exit before data is seeded.
		setTimeout(() => {
			console.log(chalk.green("The tables were sucessfully created and seeded"))
			process.exit(0)
		}, 1000)
	})
	.catch(error => console.log(chalk.red(error)));
