//import the dependencies
const express = require("express"),
  bodyParser = require("body-parser"),
  logger = require("morgan"),
  path = require("path"),
  exphbs = require("express-handlebars"),
  flash=require("connect-flash"),
  session=require("cookie-session"),
  passport=require("passport"),
  cookieParser=require("cookie-parser");
//initialize the express application
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.disable("x-powered-by");
app.use(flash());
app.use(cookieParser());
app.use(session({keys: ["hilueWEiut0270","lwtuyquy88HYgTtwh","..."]}));

// require('./app/sign');
require('./app/config/pass')(app);

app.use("/",require('./app/controllers/sign'))
//enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
//error flashing
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash("error");
    console.log(res.locals);
    next()
});
app.use(function (req, res) {
  res.status(404);
  res.render('404');
  console.log(req.user)
});
// custom 500 page
app.use(function (err, req, res) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

module.exports = app;
