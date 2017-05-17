var express = require('express'),
    app = express(),
    passport = require('./app/config/passport'),
    flash = require('connect-flash'),
    routes = require('./app/routes')(express),
    session = require('cookie-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
		exphbs=require("express-handlebars"),
		path=require("path");

app.set("port",process.env.PORT || 3000 )
app.use(cookieParser())
app.use(session({keys: ["hilueWEiut0270","lwtuyquy88HYgTtwh","..."]}));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
//flashing errors and notifications
app.use(flash())
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error')
    next()
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

passport(app);
app.use('/', routes);

app.use(function (req, res) {
  res.status(404);
  res.render('404');
});
// custom 500 page
app.use(function (err, req, res) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

// start app
app.listen(app.get('port'));
console.log("Application is running on port %s ",app.get('port'));
