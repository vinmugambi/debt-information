const Account = require('./User.js'),
    Listing = require("./Listings"),
    Profile = require("./Profiles"),
    connection = require('../config/sequelize.js')

let options = {
    freezeTableName: true
}

var User = connection.define('tbl_users', Account, options);
var Listings = connection.define('tbl_due_listing', Listing,options);
var Profiles = connection.define('tbl_profiles', Profile,options);

// Profiles.belongsTo(Listings);

module.exports.User = User;
module.exports.Listings = Listings;
module.exports.Profiles = Profiles;
