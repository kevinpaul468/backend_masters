const express = require('express');
const router = express.Router();
const {fetchDetails} = require('../models/login.js');

router.post('/api/login', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const result = await fetchDetails(email);
    if (result !== null)
        {
            if (result.password === password)
                {
                    req.session.user = result;
                    res.json({session: req.session})
                }
            else
                {
                    res.json({error: "Invalid password"});
                }
        }
    else
        {
            res.json({error: "Email not found"});
        }
}
)


module.exports = router;