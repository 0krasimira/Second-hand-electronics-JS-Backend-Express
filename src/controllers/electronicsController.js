const router = require("express").Router()
const {isAuth} = require('../middlewares/authMiddleware')
const electronicManager = require('../managers/electronicManager')
const {getErrorMessage} = require('../utils/errorUtils')

router.get('/search', isAuth, (req, res) => {
    res.render('search')
})



router.get('/create', (req, res) => {
    res.render('electronic/create')
})



router.post('/create', isAuth, async(req, res) => {
    const newElectronic = req.body
    try{
        await electronicManager.create(req.user._id, newElectronic);
        res.redirect('/catalog')
       }catch(err){
        const message = getErrorMessage(err)
        res.status(400).render("electronic/create", {...newElectronic, error: message})
       }
    })




router.get('/catalog', async (req, res) => {
    const electronics = await electronicManager.getAll().lean()
    res.render('catalog', {electronics})
})



module.exports = router