const expressConfigurator = require("./config/expressConfigurator")
const express = require("express")
const mongoose = require("mongoose")

const handlebarsConfigurator = require("./config/handlebarsConfigurator")
const app = express()
const router = require("./routes")
// const movieRouter = require("./controllers/movieController")
// const castRouter = require("./controllers/castController")
const userController = require("./controllers/userController")




expressConfigurator(app)
handlebarsConfigurator(app)


const PORT = 3000
    
app.use(router)

// app.use("/cast", castRouter)
app.use('/auth', userController)

mongoose.connect("mongodb://127.0.0.1:27017/secondHand-electronics").then(() => {console.log("DB connected succesfully.");
app.listen(PORT, () => 
    console.log(`Server is listening on port ${PORT}...`))
}).catch(err => console.log("Cannot connect to DB."))