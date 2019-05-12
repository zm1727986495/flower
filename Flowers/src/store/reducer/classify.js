import * as TYPES from '../action-types';

let INIT_STATE = {
    classifyData: [],
    queryCList:{
        data:[]
    }

};


export default function classify(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.CLASSIFY_LIST:
            let {code, data} = action.classifyData;
            if (parseFloat(code) === 0) {
                state.classifyData = data
            }
            break;
        case TYPES.QUERY_LIST:
            let {code:listCode,data:listData}=action.listData;
            if(parseFloat(listCode)===0){
                state.queryCList.data=listData;
            }
            break;

    }
    return state;
}