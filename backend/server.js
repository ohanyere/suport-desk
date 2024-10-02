const express = require("express")
const dotenv = require("dotenv").config()
const {handleError}  = require("./middleWear/routesMiddlewear")
const app = express()

const port =  process.env.PORT || 5000
app.get("/", (reg, res) => {
    res.status(200).json({"message":"Little drops of water everyday, makes a mighty ocean"})
})
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/users", require("./Routes/userRoutes"))
app.use(handleError)


app.listen(port, () => console.log(`server started at port ${port}`))
