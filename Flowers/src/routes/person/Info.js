
//个人信息

import React from 'react';
import {connect} from 'react-redux';
import {withRouter,Route} from 'react-router-dom';
import {Icon,Row, Col} from 'antd';
import action from '../../store/action/index';
import Daifukuan from '../ShopCart/addcart/Daifukuan';

class Info extends React.Component{
    constructor(props,context){
        super(props,context);
    }

componentWillMount(){
        let {baseInfo,queryBaseInfo}=this.props;
        !baseInfo ? queryBaseInfo() : null;
}

    render(){
        let {baseInfo}=this.props;
        if(!baseInfo)return'';
        let {phone}=baseInfo;
        return <section className='personInfo'>
            <div className='personTop'>
                <div className='personIcon'>
                    <a href="javascript:;" onClick={ev=>{
                        this.props.history.go(-1);
                    }}><Icon type='left' className='arrow'/></a>
                </div>
                <div className='head-portrait'>
                    <img src="http://img02.hua.com/pc/assets/img/avatar_default_04.jpg" alt="http://img02.hua.com/pc/assets/img/avatar_default_04.jpg"/>
                    <div className='personJump'>
                        <p>{phone}</p>
                        <a href="javascript:;"><Icon type='star' className='bit'/>普通会员</a>
                    </div>
                </div>
                <img src="http://img02.hua.com/m/member/center/backgroundv3.png" alt="http://img02.hua.com/m/member/center/backgroundv3.png "/>

            </div>
            <div className='personDetails'>
                <Row type="flex">
                    <Col span={6} order={1}>
                        <img src="http://img02.hua.com/m/member/center/iconPcObligation@2x.png" alt="http://img02.hua.com/m/member/center/iconPcObligation@2x.png"/>
                        <p onClick={ev=>{
                        this.props.history.push('/person/info/daifukuan')
                        }
                        }>待付款</p>
                    </Col>
                    <Col span={6} order={2}>
                        <img src="http://img02.hua.com/m/member/center/iconPcExpress@2x.png" alt="http://img02.hua.com/m/member/center/iconPcExpress@2x.png"/>
                        <p>今日配送</p>
                    </Col>
                    <Col span={6} order={3}>
                        <img src="http://img02.hua.com/m/member/center/iconPcEvaluate@2x.png" alt="http://img02.hua.com/m/member/center/iconPcEvaluate@2x.png"/>
                        <p>待评价</p>
                    </Col>
                    <Col span={6} order={4} className='colBlock'>

                        <img src="http://img02.hua.com/m/member/center/iconPcAllOrder@2x.png" alt="http://img02.hua.com/m/member/center/iconPcAllOrder@2x.png"/>
                        <p>全部订单</p>
                    </Col>
                </Row>
            </div>
            <div className='personBox'>
                <Row type="flex" className='line'>
                    <Col span={6} order={1} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/iconPcTicket@2x.png" alt="http://img02.hua.com/m/member/center/iconPcTicket@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/coupon');
                        }}>优惠券</p>
                    </Col>
                    <Col span={6} order={2} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/iconPcIntegral@2x.png" alt="http://img02.hua.com/m/member/center/iconPcIntegral@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/integral');
                        }}>积分</p>
                    </Col>
                    <Col span={6} order={3} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/iconClock@2x.png" alt="http://img02.hua.com/m/member/center/iconClock@2x.png"/>
                        <p>生日/纪念日<br/>提醒</p>

                    </Col>
                    <Col span={6} order={4} className='colBlock'>
                        <img src="http://img02.hua.com/m/member/center/iconCollectDefault@2x.png" alt="http://img02.hua.com/m/member/center/iconCollectDefault@2x.png"/>
                        <p>我的收藏</p>
                    </Col>
                </Row>
                <Row type="flex" className='line'>
                    <Col span={6} order={1} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/iconPcPay@2x.png" alt="http://img02.hua.com/m/member/center/iconPcPay@2x.png"/>
                        <p>在线付款</p>
                    </Col>
                    <Col span={6} order={2} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/bottomIconSeviceDefault@2x.png" alt="http://img02.hua.com/m/member/center/bottomIconSeviceDefault@2x.png"/>
                        <p>联系客服</p>
                    </Col>
                    <Col span={6} order={3} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/iconHelp@2x.png" alt="http://img02.hua.com/m/member/center/iconHelp@2x.png"/>
                        <p>帮助</p>
                    </Col>
                    <Col span={6} order={4} className='colBlock'>
                        <img src="http://img02.hua.com/m/member/center/iconAbout@2x.png" alt="http://img02.hua.com/m/member/center/iconAbout@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/aboutUs');
                        }}>关于花礼</p>
                    </Col>
                </Row>
            </div>
            <div className='personAddress'>
                <span>账户管理</span>
                <a href="javascropt:;" onClick={ev=>{
                    this.props.history.push('/person/signout');
                }}>
                    <p>管理收货地址等<Icon type='right'/></p>
                </a>
            </div>
            <div className='flower'>
                <img src="http://img02.hua.com/m/member/center/banner@2x.png" alt="http://img02.hua.com/m/member/center/banner@2x.png"/>
            </div>
            <Route path='/person/info/daifukuan' component={Daifukuan}/>
        </section>
    }
}
export default withRouter(connect(start=>({...start.person}),action.person)(Info));