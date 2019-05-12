import React from 'react';
import {connect} from 'react-redux'
import {Icon} from 'antd'

class coupon extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'couponTop'}>
            <div className='loginTop'>
                <div className='loginIcon clearfix'>
                    <a href="javascript:;" onClick={ev=>{
                        this.props.history.go(-1);
                    }}><Icon type='left' className='arrowL'/></a>
                    <p>我的优惠券</p>
                    <a href="javascript:;"><Icon type='bars' className='arrowR'/></a>
                </div>
            </div>
            <div className={'pic'}>
                <img src="http://img02.hua.com/app/member/no_coupon.png" alt="http://img02.hua.com/app/member/no_coupon.png"/>
                <p>
                    哦噢!～小主一张券都没有
                    <br/>
                    听说积分抽奖有很多优惠券，试试运气吧！
                </p>

            </div>
            <div className={'draw'}>
                <a href="https://www.hua.com/">下载APP参与积分抽奖</a>
            </div>
        </section>
    }
}
export default connect()(coupon);