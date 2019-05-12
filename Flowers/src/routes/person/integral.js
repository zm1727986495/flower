import React from 'react';
import {connect} from 'react-redux'
import {Icon} from 'antd'

class integral extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'integralTop'}>
            <div className='loginTop'>
                <div className='loginIcon clearfix'>
                    <a href="javascript:;" onClick={ev=>{
                        this.props.history.go(-1);
                    }}><Icon type='left' className='arrowL'/></a>
                    <p>我的积分</p>
                    <a href="javascript:;"><Icon type='bars' className='arrowR'/></a>
                </div>
            </div>
            <div className='main clearfix'>
                <div className={'top'}>
                    <a href="javascript:;" className={'rule'}>积分规则</a>
                    <p className={'scroe'}>
                        <span>0</span>
                        &nbsp;积分
                    </p>
                    <div className={'nav'}>
                        <a href="javascript:;">积分兑换</a>
                    </div>
                </div>
                <div className={'group'}>
                    <a href="javascript:;">积分明细</a>
                    <Icon type={'right'} className={'icon'}/>
                    <div style={{textAlign:'center'}}>暂无记录</div>
                </div>
            </div>

        </section>
    }
}
export default connect()(integral);