const authRouter = require("express").Router()

authRouter.get('/register', (req, res) => {
    res.render('auth/register')
})




authRouter.get('/login', (req, res) => {
    res.render('auth/login')
})

module.exports = authRouter