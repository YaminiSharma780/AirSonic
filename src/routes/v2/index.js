const express = require('express');

const router = express.Router();

router.get('./info', (req, res)=>{
    return res.json({
        msg : 'message coming from v2 ap1'
    })
});

module.exports = router;