const bcrypt = require('bcrypt-nodejs'),
  shortid = require("shortid"),
  Model = require('../models');

exports.register = (req, res) => {
  let account = req.body;
  //console.log(account)
  if (!account.username || !account.password || !account.confirm) {
    req.flash("error", "All the fields are required");
    res.redirect('/register');
  }
  else if (account.password !== account.confirm) {
    //console.log("unmatching password", "echoed by userController")
    req.flash("error", "Passwords do not match");
    res.redirect("/register")
  }
  else {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) throw new Error("Password hashing failed")
      else {
        bcrypt.hash(account.password, salt, null, function (err, hash) {
          if (err) console.log(err);
          else {
            let _id = shortid.generate;
            let newAccount = {
              _id: _id,
              username: account.username,
              salt: salt,
              password: hash,
              role: account.role
            }
            //console.log(newAccount)
            Model.User.create(newAccount).then(() => res.redirect("/"))
              .catch((error) => {
                console.log(error);
                req.flash("error", "Username is already taken. Please choose another one");
                res.redirect("/register");
              })
          }
        });
      }
    })
  }
}
