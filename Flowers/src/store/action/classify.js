import * as TYPES from '../action-types';
import {classifyList,queryList} from '../../api/claslsify';

let classify={
    queryClassify(){
        return async dispatch=>{
            let classifyData=await classifyList();
            dispatch({
                type:TYPES.CLASSIFY_LIST,
                classifyData
            })
        }
    },

    queryList(){
        return async dispatch=>{
            let listData=await queryList();
            dispatch({
                type:TYPES.QUERY_LIST,
                listData
            })
        }
    }
};

export default classify