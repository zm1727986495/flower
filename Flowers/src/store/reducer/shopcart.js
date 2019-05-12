import * as TPYES from '../action-types'

let INIT_STATE = {
    bannerData: [],
    shopCart: {
        unpay: [],
        pay: []
    },
    aryAll: [],
    selectAll: true
}

export default function person(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TPYES.SHOP_PRODUCT:
            let { code, data } = action.bannerData;
            if (parseFloat(code) === 0) {
                state.bannerData = data;
            }
            break;
        case TPYES.PRODUCT_ALL:
            if (parseFloat(action.resultAll.code) === 0) {
                state.aryAll = action.resultAll.data
            }
            break;
        case TPYES.PRODUCT_UNPAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.unpay = action.result.data;
                //=>给每一条数据加一个选中的属性
                state.shopCart.unpay = state.shopCart.unpay.map(item => {
                    return { ...item, check: true };
                })
            }
            break;
        case TPYES.PRODUCT_PAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.pay = action.result.data;
            }
            break;
        //操作全选
        case TPYES.COURSE_HANDLE:
            let mode = action.mode;
            if (mode === 'all') {
                state.selectAll = !state.selectAll;
                state.shopCart.unpay = state.shopCart.unpay.map(item => {
                    return { ...item, check: state.selectAll }
                })
            } else {
                let item = state.shopCart.unpay.find(item => parseFloat(item.id) === mode);
                item.check = !item.check;
                //注意：验证是否所有的课程都是选中的，如果全选也要选中
                let f = state.shopCart.unpay.find(item => {
                    return item.check === false;
                });
                f ? state.selectAll = false : state.selectAll = true;
            }
            break;
        case TPYES.PRODUCT_MINUS:
            let { code: c } = action.result;
            
            break;

        case TPYES.SHOP_PAY:

            break;
    }

    return state
}