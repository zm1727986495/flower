import {combineReducers} from 'redux';
import details from './details'
import shopcart from './shopcart'
import classify from './classify'
import person from './person'

let reducer = combineReducers({
        details,
        shopcart,
        classify,
        person
    })
;

export default reducer;
