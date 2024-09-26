const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

const port =  process.env.PORT || 5000
app.get("/", (reg, res) => {
    res.status(200).json({"message":"Little drops of water everyday, makes a mighty ocean"})
})

app.listen(port, () => console.log(`server started at port ${port}`))
