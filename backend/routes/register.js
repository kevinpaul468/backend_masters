const express = require('express');
const router = express.Router();
const {addNewUser} = require('../models/register');
const {emailExists} = require('../models/login');

router.post('/api/register', async(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const emailAlreadyExists = await emailExists(email);
    if (emailAlreadyExists)
        {
            res.json({message: "Email already exists"});
        }
        else{
            const result = await addNewUser(name,email,phone,password);
            if (result !== null)
                {
                    res.json({message: "User added successfully"});
                }
            else
                {
                    res.json({message: "Failed to add user"});
                }
        }
})

module.exports = router;