import * as TYPES from '../action-types'

let INIT_STATE = {
    deBannerData: [],
    queryHome: {
        data: []
    },
    queryall: {
        data: []
    },
    querylove:{
        data:[]
    },
    queryfriend:{
        data:[]
    },
    queryfamily:{
        data:[]
    },
    querysortall:{
        data:[]
    },
    querysortlove:{
        data:[]
    },
    querysortfriend:{
        data:[]
    },
    querysortfamily:{
        data:[]
    }
};

export default function details(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case TYPES.HOME_QUERY_BANNER:
            let {data, code} = action.debannerData;
            if (parseFloat(code) === 0) {
                state.deBannerData = data
            }
            break;
        case TYPES.HOME_QUERY_LIST:
            let {data: listdata, code: listcode} = action.queryListData;
            if (parseFloat(listcode) === 0) {
                state.queryHome.data = listdata;
            }
            break;
        case TYPES.HOME_ALL:
            let {data: alldata, code: allcode} = action.queryAllData;
            if (parseFloat(allcode)===0) {
                state.queryall.data=alldata;
              
            }
            break;
        case TYPES.HOME_LOVE:
            let {data: lovedata, code: lovecode} = action.queryLoveData;
            if(parseFloat(lovecode)===0){
                state.querylove.data=lovedata;
            }
            break;
        case TYPES.HOME_FRIEND:
            let {data:frienddata,code:friendcode} =action.queryFriendData;
            if(parseFloat(friendcode)===0){
                state.queryfriend.data=frienddata;
            }
            break;
        case TYPES.HOME_FAMILY:
            let {data:familydata,code:familycode} =action.queryFamilyData;
            if(parseFloat(familycode)===0){
                state.queryfamily.data=familydata
            }
            break;
        case TYPES.HOME_ALL_SORT:
            let {data:sortalldata,code:sortallcode}=action.querySortAllData;
            if(parseFloat(sortallcode)===0){
                state.querysortall.data=sortalldata
            }
            break;
        case TYPES.HOME_LOVE_SORT:
            let {data:sortlovedata,code:sortlovecode}=action.querySortLoveData;
            if(parseFloat(sortlovecode)===0){
                state.querysortlove.data=sortlovedata
            }
            break;
        case TYPES.HOME_FRIEND_SORT:
            let {data:sortfrienddata,code:sortfriendcode}=action.querySortFriendData;
            if(parseFloat(sortfriendcode)===0){
                state.querysortfriend.data=sortfrienddata
            }
            break;
        case TYPES.HOME_FAMILY_SORT:
            let {data:sortfamilydata,code:sortfamilycode}=action.querySortFamilyData;
            if(parseFloat(sortfamilycode)===0){
                state.querysortfamily.data=sortfamilydata
            }
            break;

    }

    return state
}