const loginUser = (reg, res) => {
    res.send("login users")
}

const regisUser = (reg, res) => {
    // res.send("Register users")
    console.log(reg.body)
    const {name, email, password} = reg.body
    if(!name || !email || !password){
        res.status(400)
        throw new  Error("please enter all field")
    }
}

module.exports = {regisUser, loginUser}