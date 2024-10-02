const express = require("express")
const Router = express.Router()
const {loginUser, regisUser} = require("./controller/userRoteControl")

Router.post("/", regisUser)

Router.post("/login", loginUser)
module.exports = Router