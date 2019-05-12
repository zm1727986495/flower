/*
点击退出登录的时候要做的事情
要向服务器发送请求，在服务器routes下的
发请求都写在api里面去，找到API里面的person,然后再里面增加一个退出的方法
然后导入进来，在点击的时候，使用这个方法
然后用异步编程，等返回的结果是成功后，执行完成之后，在继续往下走
我退出了之后，然后他展示的应该是个人中心，但是是没登陆的个人中心，
所以只要让person/info 这个组件重新渲染就行
那怎么才能让这个组件重新渲染呢？
所以，在这里我只要让他进入person/info的权限校验的地址，就可以重新走render权限校验，然后登录没登录
重新走/person/info，就会重新执行render，就会重新走person/info的this.state.isLogin值，肯定会重新渲染
所以，其实我只要让他跳到/person就行，就直接to='/person/info',所以就走权限校验
*/

import React from 'react';
import {connect} from 'react-redux'
import {Icon,Button} from 'antd'
import {exitLogin} from '../../api/person';

class signOut extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'personSignout'}>
            <div className='signoutTop'>
                <div className='signoutIcon clearfix'>
                    <a href="javascript:;" onClick={ev=>{
                        this.props.history.go(-1);
                    }}><Icon type='left' className='arrowL'/></a>
                    <p>账户管理</p>
                    <a href="javascript:;"><Icon type='bars' className='arrowR'/></a>
                </div>
            </div>
            <div className={'group clearfix'}>
                <a href="javascript:;" className={'noborder'}>
                <div>
                    余额
                    <span className={'good-lnk fr'}><Icon type={'right'}/></span>
                </div>
            </a>
            </div>
            <div className="group">
                <a href="javascript:;">
                    <div>个人资料管理<span className="good-lnk fr"><Icon type={'right'}/></span></div>
                </a>
                <a href="javascript:;" className="noborder">
                    <div>收货人地址管理<span className="good-lnk fr"><Icon type={'right'}/></span></div>
                </a>
            </div>
            <div className="group">
                <a href="javascript:;">
                    <div>修改密码<span className="good-lnk fr"><Icon type={'right'}/></span></div>
                </a>
                <a href="javascript:;" className="noborder">
                    <div>修改用户名<span className="good-lnk fr"><Icon type={'right'}/></span></div>
                </a>
            </div>
            <div className={'group clearfix'}>
                <a href="javascript:;" className={'noborder'}>
                    <div>
                        功能反馈
                        <span className={'good-lnk fr'}><Icon type={'right'}/></span>
                    </div>
                </a>
            </div>
            <div className={'btn'}>
                <Button type="danger" onClick={async (ev)=>{
                    await exitLogin();
                    this.props.history.push('/person');
                }}>退出登录</Button>
            </div>
        </section>
    }
}
export default connect()(signOut);