import axios from './index';


// 获取首页轮播图
export function querydetailsBanner() {
    return axios.get('/home/banner')
}

//获取首页数据
export function queryList() {
    return axios.get('/homelist/list')
}
//获取全部数据
export function queryAll(n) {
    return axios.get('/homelist/list',{
        params:{
            limit:n
        }
    })
}

//获取爱情页数据
export function queryLove(n) {
    return axios.get('/homelist/list',{
        params:{
            limit:n,
            type:"love"
        }
    })
}

//获取友情页
export function queryFriend(n) {
    return axios.get('/homelist/list',{
        params:{
            limit:n,
            type:"friend"
        }
    })
}

//获取亲情页
export function queryFamily(n) {
    return axios.get('/homelist/list',{
        params:{
            limit:n,
            type:"family"
        }
    })
}