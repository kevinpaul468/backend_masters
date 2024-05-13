const express = require('express');
const router = express.Router();

router.post('/api/logout',(req, res) => {
    req.session.destroy();
    res.json({ message: 'logout sucessful' });
}
);

module.exports = router;