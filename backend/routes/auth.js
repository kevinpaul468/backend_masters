const express = require('express');
const router = express.Router();

router.get('/api/auth', async(req, res) => {
    if (req.session.user)
        {
            res.json({session: req.session});
        }
    else
        {
            res.json();
        }
})

module.exports = router;