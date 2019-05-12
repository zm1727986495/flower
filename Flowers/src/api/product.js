import axios from './index'

export function product_Banner() {
    return axios.get('/banner/list');
}

export function queryAll(n) {
    return axios.get('/homelist/list', {
        params: {
            limit: n
        }
    })
}

//加入购物车
export function addShopCart(courseID) {
    return axios.post('/store/add', {
        courseID
    });
}

//从购物车移除
export function removeShopCart(courseID) {
    return axios.post('/store/remove', {
        courseID
    });
}

//从服务器获取最新的购物车信息（已经支付和未支付）
export function queryShopCart(state = 0) {
    return axios.get('/store/info', {
        params: {
            state
        }
    })
}

//删减某一项
export function queryMinus(courseID) {
    return axios.get('/store/minus', {
        params: {
            courseID
        }
    })
}

export function pay(courseID) {
    console.log("fsfsf")
    return axios.post('/store/pay',{
        courseID
    })
}



