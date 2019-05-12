import * as TYPES from '../action-types'
import { product_Banner, queryShopCart, queryAll, queryMinus,pay} from '../../api/product'


let shopcart = {
    queryBanner() {
        return async dispatch => {
            let bannerData = await product_Banner();
            dispatch({
                type: TYPES.SHOP_PRODUCT,
                bannerData
            })
        }
    },
    queryUnpay() {
        return async dispatch => {
            let result = await queryShopCart(0);
            dispatch({
                type: TYPES.PRODUCT_UNPAY,
                result
            })
        }
    },
    queryPay() {
        return async dispatch => {
            let result = await queryShopCart(1);
            dispatch({
                type: TYPES.PRODUCT_UNPAY,
                result
            })
        }
    },
    queryAll(n) {
        return async dispatch => {
            let resultAll = await queryAll(n);
            dispatch({
                type: TYPES.PRODUCT_ALL,
                resultAll
            })
        }
    },
    handleSelect(mode) {
        //mode:all全选或者全不选  id(具体数字)把某一个课程控制选择
        return {
            type: TYPES.COURSE_HANDLE,
            mode
        }
    },
    queryMinus(courseId){
        return async dispatch=>{
            let result = await queryMinus(courseId);
            dispatch({
                type:TYPES.PRODUCT_MINUS,
                result
            })
        }
    },
    shopPay(courseId){
        return async dispatch=>{
            let result=await pay(courseId);
            dispatch({
                type:TYPES.SHOP_PAY
            })
        }
    }
};
export default shopcart;