const Model = require("../models");
const chalk = require("chalk");

var Debtor = Model.Listings.belongsTo(Model.Profiles, { as: "debtor" });

exports.search = (req, res) => {
	console.log(chalk.yellow(req.body.number))
	if (!req.body.number) {
		req.flash('error', "You must a enter a number");
		res.redirect("/search");
	}
	else {
		let number = req.body.number.trim();
		Model.Profiles.find({
			where: {
				$or: [
					{ phoneNumber: number },
					{ nationalId: number },
					{ phoneNumber: number.slice(1) }
				]
			}
		}).then((profile) => {
			if (profile) {
				res.locals.profile = profile.dataValues;
				res.locals.user = req.user;
				res.render("dashboard").json(profile);
			} else if (!profile) {
				req.flash("error", "User not found!")
				res.redirect("/search")
			} else {
				req.flash("error", "Something went wrong")
			}
		}).catch((error) => {
			console.log(chalk.red(error))
		})
	}
}

exports.list = (req, res) => {
	if (!req.user || req.user.dataValues.role !== "roleA") {
		req.flash("error", "You are not authorised to view the content linked to view list button");
		res.redirect("search");
	} else {
		Model.Listings.findAll({
			include: [Debtor]
		}).then((listings) => {
			if (listings) {
				res.locals.list = listings;
				res.locals.user = req.user;
				res.render("list")
			} else {
				res.flash("error", "No listings were found!")
			}
		})
	}
}
