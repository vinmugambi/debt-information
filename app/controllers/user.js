const bcrypt = require('bcrypt-nodejs'),
  Model = require('../models'),
  shortid = require("shortid");

exports.register = (req, res) => {
  let account = req.body;
  console.log(account)
  if (!account.username || !account.password || !account.confirm || !account.phoneNumber || !account.lastName || !account.firstName) {
    console.log("fields missing", "echoed by userController")
    req.flash("error", "All the fields are required");
    res.redirect('/signup');
  }
  else if (account.password !== account.confirm) {
    console.log("unmatching password", "echoed by userController")
    req.flash("error", "Passwords do not match");
    res.redirect("/signup")
  }
  else {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) throw new Error("Password hashing failed")
      else {
        bcrypt.hash(account.password, salt, null, function (err, hash) {
          if (err) console.log(err);
          else {
            let _id = shortid.generate();
            console.log(_id);
            let newAccount = {
              _id: _id,
              username: account.username,
              salt: salt,
              password: hash,
              phoneNumber: account.phoneNumber,
              name: account.firstName.concat(" ", account.lastName),
              role: account.role
            }
            console.log(newAccount)
            Model.User.create(newAccount).then(() => res.redirect("/"))
              .catch((error) => {
                console.log(error.name);
                req.flash("error", "Username is already taken. Please choose another one");
                res.redirect("/signup");
              })
          }
        });
      }
    })
  }
}
