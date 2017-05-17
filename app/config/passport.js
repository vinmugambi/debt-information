const passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	bcrypt = require('bcrypt-nodejs'),
	Model = require('../models');

module.exports = function (app) {
	app.use(passport.initialize());
	app.use(passport.session());

	passport.use(new LocalStrategy((username, password, cb) => {
		Model.User.findOne({
			where: {
				"username": username
			}
		}).then((user) => {
			if (!user) {
				console.log("user doesnt exist")
				return cb(null, false, { message: "User not Found. Register first" })
			}
			else if (user) {
				console.log("user exists")
				bcrypt.hash(password, user.salt, null, function (err, hash) {
					if (err) console.log(err);
					else if (hash === user.password) {
						console.log("User Found and logged")
						cb(null, user);
					}
					else {
						console.log("password incorrect")
						return cb(null, false, { message: "Username or password is incorrect" })
					}
				});
			} else {
				console.log("unknown error")
				return cb(null, false, { message: "Something went wrong. Try again later" })
			}
		})
	}));

passport.serializeUser((user, cb) => cb(null, user.id));
passport.deserializeUser(function(id, done) {
	Model.User.findOne({
		where: {
			'id': id
		}
	}).then(function (user) {
		if (user == null) done(new Error('Wrong user id.'))
    else done(null, user)
	})
})
}
