import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {Icon} from 'antd';
import action from '../store/action/index'


class NavBottom extends React.Component {
    constructor(props, context) {
        super(props, context);

        //=>每一次页面刷新，redux中存储的购物车信息都会消失，所以我们需要在页面刷新的时候，执行一个dispatch派发，把服务器中存储的购物信息放到redux
        this.props.queryUnpay();
        
    }

    render() {
        let ary = ['/suibianqi', '/shopcart/product', '/shopcart', '/home/homelist/all', '/home/homelist/love', '/home/homelist/friend', '/home/homelist/family','/shopcart/shopping'];
        if (ary.includes(this.props.location.pathname)) return '';

        return <footer className='footerNavBox'>
            <NavLink to='/home'>
                <Icon type='home'/>
                <span>首页</span>
            </NavLink>
            <NavLink to='/classify'>
                <Icon type='appstore'/>
                <span>分类</span>
            </NavLink>
            <NavLink to='/shopcart'>
                <Icon type='shopping-cart'/>
                <span>购物车</span>
            </NavLink>
            <NavLink to='/person'>
                <Icon type='user'/>
                <span>我的</span>
            </NavLink>
        </footer>;
    }
}

export default withRouter(connect(null,action.shopcart)(NavBottom));