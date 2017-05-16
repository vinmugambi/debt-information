var express = require('express'),
    app = express(),
    setupPassport = require('./app/config/passport'),
    flash = require('connect-flash'),
    appRouter = require('./app/controllers/sign.js')(express),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
		exphbs=require("express-handlebars"),
		path=require("path"),
    jsonParser = bodyParser.json()

var port = process.env.PORT || 8080

app.use(cookieParser())
app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    compare: function( v1, op, v2, options ) {

  var c = {
    "eq": function( v1, v2 ) {
      return v1 == v2;
    },
    "neq": function( v1, v2 ) {
      return v1 != v2;
    },
  }

  if( Object.prototype.hasOwnProperty.call( c, op ) ) {
    return c[ op ].call( this, v1, v2 ) ? options.fn( this ) : options.inverse( this );
  }
  return options.inverse( this );
}

  }
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash())
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error')
    next()
});
app.use(jsonParser)
app.use(bodyParser.urlencoded({
  extended: true
}))

setupPassport(app)

app.use('/', appRouter)

// start app
app.listen(port)
console.log('Server started on port ' + port)

module.exports.getApp = app
