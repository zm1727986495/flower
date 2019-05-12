import * as TYPES from '../action-types';
import {querydetailsBanner,queryList,queryAll,queryLove,queryFriend,queryFamily} from '../../api/details';


let details ={
    qeuryBanner(){
        return async dispatch=>{
            let debannerData=await querydetailsBanner();
            dispatch({
                type:TYPES.HOME_QUERY_BANNER,
                debannerData
            })
        }
    },
    queryList(){
        return async dispatch=>{
            let queryListData=await queryList();
            dispatch({
                type:TYPES.HOME_QUERY_LIST,
                queryListData
            })
        }
    },
    queryAll(n){
        return async dispatch=>{
            let queryAllData=await queryAll(n);
            dispatch({
                type:TYPES.HOME_ALL,
                queryAllData
            })
        }
    },
    queryLove(n){
        return async dispatch=>{
            let queryLoveData=await queryLove(n);
            dispatch({
                type:TYPES.HOME_LOVE,
                queryLoveData
            })
        }
    },
    queryFriend(n){
        return async dispatch=>{
            let queryFriendData=await queryFriend(n);
            dispatch({
                type:TYPES.HOME_FRIEND,
                queryFriendData
            })
        }
    },

    queryFamily(n){
        return async dispatch=>{
            let queryFamilyData=await queryFamily(n);
            dispatch({
                type:TYPES.HOME_FAMILY,
                queryFamilyData
            })
        }
    },
    querySortAll(n){
        return async dispatch=>{
            let querySortAllData=await queryAll(n);
            dispatch({
                type:TYPES.HOME_ALL_SORT,
                querySortAllData
            })
        }
    },
    querySortLove(n){
        return async dispatch=>{
            let querySortLoveData=await queryLove(n);
            dispatch({
                type:TYPES.HOME_LOVE_SORT,
                querySortLoveData
            })
        }
    },
    querySortFriend(n){
        return async dispatch=>{
            let querySortFriendData=await queryFriend(n);
            dispatch({
                type:TYPES.HOME_FRIEND_SORT,
                querySortFriendData
            })
        }
    },
    querySortFamily(n){
        return async dispatch=>{
            let querySortFamilyData=await queryFamily(n);
            dispatch({
                type:TYPES.HOME_FAMILY_SORT,
                querySortFamilyData
            })
        }
    }


};
export default details;