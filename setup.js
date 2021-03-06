const Models = require("./app/models");
const chalk = require("chalk");
const connection = require("./app/config/sequelize");

var Listings = Models.Listings;
var Profiles = Models.Profiles;
var Debtor = Listings.belongsTo(Profiles, { as: "debtor" });

connection.sync({ force: true })
	.then(() => {
		Models.User.create({
			username: "vinmugambi",
			password: "$2a$10$LiqhTxrQYhDmZj/n3T7X7ubm/wEqTF8cH7REk9vQCrs5DATw.rFVC",
			salt: "$2a$10$LiqhTxrQYhDmZj/n3T7X7u",
			role: "roleA"
		})

		Models.User.create({
			username: "vinmugambi17",
			password: "$2a$10$3zMdDc.GqN8RaiFUlm2N2ubiRfB1WxbVHUaeMI1wZQhQ0.XzIYBGu",
			salt: "$2a$10$3zMdDc.GqN8RaiFUlm2N2u",
			role: "roleB"
		})

		Listings.create({
			debtAmount: 200.00,
			debtor: {
				fullName: "SINATRA MWENDA",
				nationalId: 32290939,
				phoneNumber: 700455049,
				branch: "Lamu"
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
				phoneNumber: 784558006,
				branch: "Rongai"
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
				branch: "Westlands"
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
				branch: "Kisii"
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
				branch: "Kisii"
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
				branch: "Murang'a"
			}
		},
			{
				include: [Debtor]
			}
		);

		Listings.create({
			debtAmount: 40000.00,
			amountPaid: 20000.00,
			dateDue: new Date(Date.now() + 1000 * 60 * 60 * 24 * 200).toLocaleDateString(),
			dateOfIssue: "29/3/2017",
			debtor: {
				fullName: "ESTHER NYAMBOKE",
				nationalId: 26895090,
				phoneNumber: 78394898,
				branch: "Kisumu"
			}
		},
			{
				include: [Debtor]
			}
		);

		Listings.create({
			debtAmount: 490.00,
			amountPaid: 50.00,
			dateDue: new Date(Date.now() + 1000 * 60 * 60 * 24 * 20).toLocaleDateString(),
			dateOfIssue: "21/5/2017",
			debtor: {
				fullName: "WILBERFOCE KIRIMA",
				nationalId: 23800200,
				phoneNumber: 745909006,
				branch: "Eldoret"
			}
		},
			{
				include: [Debtor]
			}
		);

		Listings.create({
			debtAmount: 4000.00,
			amountPaid: 200.00,
			dateDue: new Date(Date.now() + 1000 * 60 * 60 * 24 * 200).toLocaleDateString(),
			dateOfIssue: "02/4/2017",
			debtor: {
				fullName: "KESSIAH WANJIKU",
				nationalId: 28946470,
				phoneNumber: 789409050,
				branch: "Nakuru"
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
