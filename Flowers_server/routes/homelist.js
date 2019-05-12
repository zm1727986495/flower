const express = require('express'),
    route = express.Router();


route.get('/welfare', (req, res) => {
    //=>我就是把所有课程中的最后三条数据做为轮播图展示
    let data = req.homelistDATA.reverse().slice(0, 8);
    res.send({
        code: 0,
        msg: 'OK!',
        data
    });
});

route.get('/list', (req, res) => {
    //=>接收客户端传递的参数值，不传的给默认值：limit每页展示条数，page是第几页，type是筛选的类型
    let { limit = 6, page = 1, type = 'all' } = req.query;
    limit = parseFloat(limit);
    page = parseFloat(page);

    //=>筛选：先按照传递的类型把数据筛选一轮（ALL是所有不用筛选）
    if (type !== 'all') {
        req.homelistDATA = req.homelistDATA.filter(item => {
            return item.type === type;
        });
    }

    //=>分页处理：就是在所有筛选出来的数据中，找到某一页的那几条数据，然后就把这几条返回给客户端即可
    let total = Math.ceil(req.homelistDATA.length / limit),//=>总页数
        result = [];
    if (page <= total) {

        for (let i = (page - 1) * limit; i <= (page * limit - 1); i++) {
            let item = req.homelistDATA[i];
            if (!item) break;
            result.push(item);
        }
    }
    res.send({
        code: 0,
        msg: 'OK!',
        total,
        limit,
        page,
        data: result
    });
});

module.exports = route;