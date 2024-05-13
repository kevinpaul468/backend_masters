const express = require('express');
const router = express.Router();
const {addNewUser} = require('../models/register');

router.post('/api/register', async(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const result = await addNewUser(name,email,phone,password);
    if (result !== null)
        {
            res.json({success: "User added successfully"});
        }
    else
        {
            res.json({error: "Failed to add user"});
        }
})

module.exports = router;