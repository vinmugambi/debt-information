var passport = require('passport'),
  registerController = require('../controllers/user'),
  debt = require("../controllers/debt")

module.exports = function () {
  var router = require('express').Router()

  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/')
  }


  router.post('/login', passport.authenticate('local', {
    successRedirect: '/search',
    failureRedirect: '/',
    failureFlash: true
  }))

  router.route("/register")
    .post(registerController.register)
    .get((req, res) => res.render("register"));

  router.get('/', function (req, res) {
    res.render('login')
  })

  router.get('/login', function (req, res) {
    res.render('login')
  })

  router.route("/list")
    .get(debt.list)

  router.route("/search")
    .get(isAuthenticated, function (req, res) {
      res.locals.user = req.user;
      res.render('dashboard')
    })
    .post(debt.search);

  router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  return router
}
