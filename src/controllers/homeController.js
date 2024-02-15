const router = require("express").Router()
// const movieManager = require("../managers/movieManager")
// const authRouter = require("./authController")
// const castRouter = require("./castController")
// const movieRouter = require("./movieController")


router.get('/', (req, res) => {
    res.render('home')
})

router.get('/404', (req, res) => {
    res.render('404')
})

module.exports = router