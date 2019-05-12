//未登录提示
import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import {Icon,Row, Col,Button} from 'antd'
import Login from "./Login";
import Register from "./Register";

class Tip extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className='personTip'>
            <div className='tipTop'>
                <div className='tipIcon'>
                    <a href="javascript:;" onClick={ev=>{
                        this.props.history.go(-1);
                    }}><Icon type='left' className='arrow'/></a>
                </div>
                <img src="http://img02.hua.com/m/member/center/backgroundv3.png" alt="http://img02.hua.com/m/member/center/backgroundv3.png "/>
                <div className='tipJump'>
                    <p>Hi,欢迎来到花礼网</p>
                    <a href="javascript:;" className='login-btn ' onClick={ev=>{
                        this.props.history.push('/person/login');
                    }}>登录/注册</a>
                </div>
            </div>
            <div className='tipDetails'>
                <Row type="flex">
                    <Col span={6} order={1}>
                        <img src="http://img02.hua.com/m/member/center/iconPcObligation@2x.png" alt="http://img02.hua.com/m/member/center/iconPcObligation@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>待付款</p>
                    </Col>
                    <Col span={6} order={2}>
                        <img src="http://img02.hua.com/m/member/center/iconPcExpress@2x.png" alt="http://img02.hua.com/m/member/center/iconPcExpress@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>今日配送</p>
                    </Col>
                    <Col span={6} order={3}>
                        <img src="http://img02.hua.com/m/member/center/iconPcEvaluate@2x.png" alt="http://img02.hua.com/m/member/center/iconPcEvaluate@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>待评价</p>
                    </Col>
                    <Col span={6} order={4} className='colBlock'>

                        <img src="http://img02.hua.com/m/member/center/iconPcAllOrder@2x.png" alt="http://img02.hua.com/m/member/center/iconPcAllOrder@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>全部订单</p>
                    </Col>
                </Row>
            </div>
            <div className='tipBox'>
                <Row type="flex" className='line'>
                    <Col span={6} order={1} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/iconPcTicket@2x.png" alt="http://img02.hua.com/m/member/center/iconPcTicket@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>优惠券</p>
                    </Col>
                    <Col span={6} order={2} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/iconPcIntegral@2x.png" alt="http://img02.hua.com/m/member/center/iconPcIntegral@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>积分</p>
                    </Col>
                    <Col span={6} order={3} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/iconClock@2x.png" alt="http://img02.hua.com/m/member/center/iconClock@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>生日/纪念日<br/>提醒</p>

                    </Col>
                    <Col span={6} order={4} className='colBlock'>
                        <img src="http://img02.hua.com/m/member/center/iconCollectDefault@2x.png" alt="http://img02.hua.com/m/member/center/iconCollectDefault@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>我的收藏</p>
                    </Col>
                </Row>
                <Row type="flex" className='line'>
                    <Col span={6} order={1} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/iconPcPay@2x.png" alt="http://img02.hua.com/m/member/center/iconPcPay@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>在线付款</p>
                    </Col>
                    <Col span={6} order={2} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/bottomIconSeviceDefault@2x.png" alt="http://img02.hua.com/m/member/center/bottomIconSeviceDefault@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>联系客服</p>
                    </Col>
                    <Col span={6} order={3} className='lines'>
                        <img src="http://img02.hua.com/m/member/center/iconHelp@2x.png" alt="http://img02.hua.com/m/member/center/iconHelp@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>帮助</p>
                    </Col>
                    <Col span={6} order={4} className='colBlock'>
                        <img src="http://img02.hua.com/m/member/center/iconAbout@2x.png" alt="http://img02.hua.com/m/member/center/iconAbout@2x.png"/>
                        <p onClick={ev=>{
                            this.props.history.push('/person/login');
                        }}>关于花礼</p>
                    </Col>
                </Row>
            </div>
            <div className='tipAddress'>
                <span>账户管理</span>
                <a href="javascropt:;" onClick={ev=>{
                    this.props.history.push('/person/login');
                }}>
                   <p>管理收货地址等<Icon type='right'/></p>
                </a>
            </div>
            <div className='flower'>
                <img src="http://img02.hua.com/m/member/center/banner@2x.png" alt="http://img02.hua.com/m/member/center/banner@2x.png"/>
            </div>
        </section>
    }
}
export default withRouter(connect()(Tip));