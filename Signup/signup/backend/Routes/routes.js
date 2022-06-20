const express = require('express')
const router = express.Router()
const TemplateCopy = require("../models/signupmodels")
const bcrypt = require('bcrypt')

router.post("/signup", async (req, res) => {

    const saltPW = await bcrypt.genSalt(10)
    const securePW = await bcrypt.hash(req.body.Password, saltPW)

    const User = new TemplateCopy({
        FullName:req.body.FullName,
        Username:req.body.Username,
        Email:req.body.Email,
        Password:securePW
    })
    User.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})


module.exports = router