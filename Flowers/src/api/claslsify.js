import axios from './index';

export function classifyList() {
    return axios.get('/classify/list');
}

export function queryList() {
    return axios.get('/homelist/list');
}