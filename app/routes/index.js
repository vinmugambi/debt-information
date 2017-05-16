module.exports= function(app){
	let router=require("express").Router();
	let passport=require("passport");
	let userController= require("../controllers/user")

	router.route("/")
	.get((req,res)=>{
		res.redirect("login");
	})


router.get("/account",(req,res)=>{
	if (req.user) res.render('dashboard')
	else res.redirect("/login")
})

	router.route("/login")
	.get((req,res)=>{
		if (req.user) res.render("dashboard");
		else res.render("login");
	})
	.post(passport.authenticate('local', {
      successRedirect: '/account',
      failureRedirect: '/login',
      failureFlash: true
  }))

	router.route("/register")
	.get((req,res)=>res.render("signup"))
	.post(userController.register)

	router.get('/logout', (req, res) =>{
    req.logout()
    res.redirect('/')
  })

	app.use("/",router)
}
