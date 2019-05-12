const express = require('express'),
    route = express.Router();

route.get('/banner', (req, res) => {
  
    let data = req.homeDATA;
    res.send({
        code: 0,
        msg: 'OK!',
        data
    });
});


module.exports = route;