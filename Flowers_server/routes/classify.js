const express = require('express'),
    route = express.Router();

route.get('/list', (req, res) => {
    let data = req.classifyDATA;
    res.send({
        code: 0,
        msg: 'OK!',
        data
    });
});


module.exports = route;